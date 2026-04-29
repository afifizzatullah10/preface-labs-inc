"use client";

import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "../components/theme-toggle";
import { useAuth } from "../components/auth-provider";

export default function LoginPage() {
  const router = useRouter();
  const { user, loading, configError, signInWithGoogle, signOut } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleGoogleLogin() {
    setSubmitting(true);
    setError(null);

    try {
      await signInWithGoogle();
      router.push("/library");
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Google login failed. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-8 text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="text-sm font-semibold">
          Preface Labs
        </Link>
        <ThemeToggle />
      </div>

      <section className="mx-auto mt-20 max-w-md rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
          Library Login
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          Sign in with Google
        </h1>
        <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
          Use Google authentication to access your library dashboard and submit
          feedback.
        </p>

        {configError ? (
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-200">
            {configError}
          </div>
        ) : null}

        {error ? (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200">
            {error}
          </div>
        ) : null}

        {loading ? (
          <div className="mt-8 flex items-center gap-2 text-sm text-neutral-500">
            <Loader2 className="h-4 w-4 animate-spin" />
            Checking session...
          </div>
        ) : user ? (
          <div className="mt-8 space-y-4">
            <div className="rounded-2xl bg-neutral-50 p-4 text-sm dark:bg-black">
              Signed in as{" "}
              <span className="font-medium">{user.email ?? user.displayName}</span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/library"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                Go to library
              </Link>
              <button
                type="button"
                onClick={signOut}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-neutral-200 px-5 py-3 text-sm font-medium transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-500"
              >
                Sign out
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={submitting || Boolean(configError)}
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            {submitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-neutral-900">
                G
              </span>
            )}
            Continue with Google
          </button>
        )}
      </section>
    </main>
  );
}
