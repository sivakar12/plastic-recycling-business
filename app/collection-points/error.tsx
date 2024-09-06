"use client";

import ErrorDisplay from "../shared/ErrorDisplay";

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return <ErrorDisplay error={error} reset={reset} />
}