'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-base">
      <div className="text-center max-w-md mx-auto px-6">
        <p className="label text-muted mb-6">Error</p>
        <h2
          className="font-heading text-heading font-semibold text-text mb-4"
          style={{ letterSpacing: '-0.03em' }}
        >
          Something went wrong
        </h2>
        <p className="text-muted mb-10 font-body text-base leading-relaxed">
          An unexpected error occurred. Try again — if it keeps happening, it&apos;s
          on my side, not yours.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-3 bg-accent text-white font-heading font-semibold text-sm uppercase px-7 py-3.5 hover:bg-accent/90 transition-colors duration-200"
          style={{ letterSpacing: '0.12em' }}
        >
          Try again
        </button>
      </div>
    </div>
  )
}
