import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-trueAutumn-light dark:bg-trueAutumn-dark">
      <div className="text-center max-w-md mx-auto px-6">
        <h2 className="text-6xl font-heading font-bold text-trueAutumn-accentLight dark:text-trueAutumn-accentDark mb-4">
          404
        </h2>
        <h3 className="text-2xl font-heading font-bold text-trueAutumn-textLight dark:text-trueAutumn-textDark mb-4">
          Page Not Found
        </h3>
        <p className="text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark mb-6 font-body">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-trueAutumn-buttonLight dark:bg-trueAutumn-buttonDark hover:bg-trueAutumn-buttonLightHover dark:hover:bg-trueAutumn-buttonDarkHover text-white font-body font-medium rounded-lg transition-colors duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
