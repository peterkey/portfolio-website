export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base">
      <div className="text-center">
        <div
          className="animate-spin rounded-full h-12 w-12 border-2 border-accent/20 border-t-accent mx-auto mb-5"
          aria-hidden="true"
        />
        <p className="label text-muted">Loading</p>
      </div>
    </div>
  )
}
