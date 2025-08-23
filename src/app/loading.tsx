export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-trueAutumn-light dark:bg-trueAutumn-dark">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-trueAutumn-accentLight/20 dark:border-trueAutumn-accentDark/20 border-t-trueAutumn-accentLight dark:border-t-trueAutumn-accentDark mx-auto mb-4"></div>
        <p className="text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark font-body">
          Loading...
        </p>
      </div>
    </div>
  )
}
