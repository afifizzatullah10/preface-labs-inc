import { Timestamp } from "firebase/firestore";

export type FeedbackRecord = {
  id: string;
  userId: string;
  userEmail: string | null;
  userName: string | null;
  message: string;
  createdAt: Timestamp | null;
};

export function formatFeedbackDate(createdAt: Timestamp | null) {
  if (!createdAt) return "Just now";
  return createdAt.toDate().toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function sortFeedbackNewestFirst(
  first: FeedbackRecord,
  second: FeedbackRecord,
) {
  const firstTime = first.createdAt?.toMillis() ?? 0;
  const secondTime = second.createdAt?.toMillis() ?? 0;
  return secondTime - firstTime;
}
