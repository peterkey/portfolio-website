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
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-trueAutumn-light dark:bg-trueAutumn-dark">
      <div className="text-center max-w-md mx-auto px-6">
        <h2 className="text-2xl font-heading font-bold text-trueAutumn-textLight dark:text-trueAutumn-textDark mb-4">
          Something went wrong!
        </h2>
        <p className="text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark mb-6 font-body">
          We encountered an unexpected error. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center px-6 py-3 bg-trueAutumn-buttonLight dark:bg-trueAutumn-buttonDark hover:bg-trueAutumn-buttonLightHover dark:hover:bg-trueAutumn-buttonDarkHover text-white font-body font-medium rounded-lg transition-colors duration-300"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
