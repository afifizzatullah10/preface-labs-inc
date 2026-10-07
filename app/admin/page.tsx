"use client";

import {
  collection,
  getDocs,
  onSnapshot,
  type DocumentData,
  type QueryDocumentSnapshot,
} from "firebase/firestore";
import { Loader2, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../components/auth-provider";
import ThemeToggle from "../components/theme-toggle";
import { isAdminEmail } from "../lib/admin";
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

export default function AdminPage() {
  const { user, loading, configError, signOut } = useAuth();
  const [feedback, setFeedback] = useState<FeedbackRecord[]>([]);
  const [feedbackLoading, setFeedbackLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isAdmin = isAdminEmail(user?.email);

  const loadFeedback = useCallback(async () => {
    if (!db || !isAdmin) return;

    setFeedbackLoading(true);
    setError(null);
    try {
      const snapshot = await getDocs(collection(db, "feedback"));
      setFeedback(snapshot.docs.map(mapFeedbackDoc).sort(sortFeedbackNewestFirst));
    } catch (loadError) {
      setError(
        loadError instanceof Error
          ? loadError.message
          : "Could not load feedback.",
      );
    } finally {
      setFeedbackLoading(false);
    }
  }, [isAdmin]);

  useEffect(() => {
    if (!db || !isAdmin) return;

    return onSnapshot(
      collection(db, "feedback"),
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
  }, [isAdmin]);

  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-8 text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="text-sm font-semibold">
          Preface Labs
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/library"
            className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            Library
          </Link>
          <ThemeToggle />
        </div>
      </div>

      <section className="mx-auto mt-12 max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
              Admin
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight">
              Feedback table
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              Review feedback submitted by signed-in library users.
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
              Please sign in with your admin Google account.
            </p>
            <Link
              href="/login"
              className="mt-6 inline-flex rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Go to login
            </Link>
          </div>
        ) : !isAdmin ? (
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
            <h2 className="text-xl font-semibold">Not an admin account</h2>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              {user.email} is signed in, but it is not listed in{" "}
              <code>NEXT_PUBLIC_ADMIN_EMAILS</code>.
            </p>
          </div>
        ) : (
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Showing {feedback.length} feedback{" "}
                {feedback.length === 1 ? "entry" : "entries"}.
              </p>
              <button
                type="button"
                onClick={loadFeedback}
                disabled={feedbackLoading}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium transition-colors hover:border-neutral-400 disabled:cursor-not-allowed disabled:opacity-60 dark:border-neutral-700 dark:hover:border-neutral-500"
              >
                {feedbackLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <RefreshCw className="h-4 w-4" />
                )}
                Refresh
              </button>
            </div>

            {error ? (
              <p className="mb-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200">
                {error}
              </p>
            ) : null}

            <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-neutral-200 text-sm dark:divide-neutral-800">
                  <thead className="bg-neutral-50 text-left text-xs font-medium uppercase tracking-wider text-neutral-500 dark:bg-black">
                    <tr>
                      <th className="px-4 py-3">User</th>
                      <th className="px-4 py-3">Feedback</th>
                      <th className="px-4 py-3">Submitted</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                    {feedback.length === 0 ? (
                      <tr>
                        <td
                          colSpan={3}
                          className="px-4 py-8 text-center text-neutral-500"
                        >
                          No feedback has been submitted yet.
                        </td>
                      </tr>
                    ) : (
                      feedback.map((item) => (
                        <tr key={item.id} className="align-top">
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="font-medium">
                              {item.userName ?? "Unknown user"}
                            </div>
                            <div className="mt-1 text-xs text-neutral-500">
                              {item.userEmail ?? "No email"}
                            </div>
                          </td>
                          <td className="max-w-xl px-4 py-4 leading-6 text-neutral-700 dark:text-neutral-300">
                            {item.message}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-neutral-500">
                            {formatFeedbackDate(item.createdAt)}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
