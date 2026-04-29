"use client";

import {
  addDoc,
  collection,
  onSnapshot,
  query,
  serverTimestamp,
  where,
  type DocumentData,
  type QueryDocumentSnapshot,
} from "firebase/firestore";
import { Loader2, Send } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { useAuth } from "../components/auth-provider";
import ThemeToggle from "../components/theme-toggle";
import { db } from "../lib/firebase";
import {
  formatFeedbackDate,
  sortFeedbackNewestFirst,
  type FeedbackRecord,
} from "../lib/feedback";

function mapFeedbackDoc(
  doc: QueryDocumentSnapshot<DocumentData>,
): FeedbackRecord {
  const data = doc.data();
  return {
    id: doc.id,
    userId: data.userId,
    userEmail: data.userEmail ?? null,
    userName: data.userName ?? null,
    message: data.message,
    createdAt: data.createdAt ?? null,
  };
}

export default function LibraryPage() {
  const { user, loading, configError, signOut } = useAuth();
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState<FeedbackRecord[]>([]);
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!db || !user) return;

    const feedbackQuery = query(
      collection(db, "feedback"),
      where("userId", "==", user.uid),
    );

    return onSnapshot(
      feedbackQuery,
      (snapshot) => {
        setFeedback(
          snapshot.docs.map(mapFeedbackDoc).sort(sortFeedbackNewestFirst),
        );
        setFeedbackLoading(false);
      },
      (snapshotError) => {
        setError(snapshotError.message);
        setFeedbackLoading(false);
      },
    );
  }, [user]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setNotice(null);

    const trimmedMessage = message.trim();
    if (!trimmedMessage) {
      setError("Please write feedback before submitting.");
      return;
    }

    if (!db || !user) {
      setError("Please sign in before submitting feedback.");
      return;
    }

    setSubmitting(true);
    try {
      await addDoc(collection(db, "feedback"), {
        userId: user.uid,
        userEmail: user.email ?? null,
        userName: user.displayName ?? null,
        message: trimmedMessage,
        createdAt: serverTimestamp(),
      });
      setMessage("");
      setNotice("Thanks. Your feedback was sent to the admin table.");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Could not submit feedback. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-8 text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="text-sm font-semibold">
          Preface Labs
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/admin"
            className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            Admin
          </Link>
          <ThemeToggle />
        </div>
      </div>

      <section className="mx-auto mt-12 max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
              Library Dashboard
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight">
              Your feedback
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              Submit feedback from your library dashboard. Admins can review it
              in the admin table.
            </p>
          </div>

          {user ? (
            <button
              type="button"
              onClick={signOut}
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-5 py-3 text-sm font-medium transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-500"
            >
              Sign out
            </button>
          ) : null}
        </div>

        {configError ? (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-200">
            {configError}
          </div>
        ) : loading ? (
          <div className="flex items-center gap-2 rounded-3xl border border-neutral-200 bg-white p-8 text-sm text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900">
            <Loader2 className="h-4 w-4 animate-spin" />
            Checking your login...
          </div>
        ) : !user ? (
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
            <h2 className="text-xl font-semibold">Login required</h2>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              Please sign in with Google before opening your library dashboard.
            </p>
            <Link
              href="/login"
              className="mt-6 inline-flex rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Go to login
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 md:p-8"
            >
              <div className="rounded-2xl bg-neutral-50 p-4 text-sm text-neutral-600 dark:bg-black dark:text-neutral-400">
                Signed in as{" "}
                <span className="font-medium text-neutral-900 dark:text-white">
                  {user.email ?? user.displayName}
                </span>
              </div>

              <label
                htmlFor="feedback"
                className="mt-6 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                Feedback
              </label>
              <textarea
                id="feedback"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={8}
                placeholder="Tell us what is working, what is confusing, or what you want next..."
                className="mt-2 w-full resize-none rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-500 dark:border-neutral-700 dark:bg-black dark:focus:border-neutral-400"
              />

              {notice ? (
                <p className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-200">
                  {notice}
                </p>
              ) : null}
              {error ? (
                <p className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                {submitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                Submit feedback
              </button>
            </form>

            <aside className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <h2 className="text-lg font-semibold">Your past feedback</h2>
              {feedbackLoading ? (
                <div className="mt-5 flex items-center gap-2 text-sm text-neutral-500">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Loading...
                </div>
              ) : feedback.length === 0 ? (
                <p className="mt-5 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                  No feedback yet. Submit your first note from the form.
                </p>
              ) : (
                <div className="mt-5 space-y-3">
                  {feedback.map((item) => (
                    <article
                      key={item.id}
                      className="rounded-2xl bg-neutral-50 p-4 dark:bg-black"
                    >
                      <p className="text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                        {item.message}
                      </p>
                      <p className="mt-3 text-xs text-neutral-500">
                        {formatFeedbackDate(item.createdAt)}
                      </p>
                    </article>
                  ))}
                </div>
              )}
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}
