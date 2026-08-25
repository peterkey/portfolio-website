import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ink flex flex-col items-center justify-center px-4">
      <p className="label text-text/60 mb-6">404</p>
      <h1
        className="font-heading text-heading font-semibold text-text mb-4 text-center"
        style={{ letterSpacing: '-0.03em' }}
      >
        Page not found
      </h1>
      <p className="text-text/60 font-body text-base mb-10 text-center max-w-[36ch]">
        This page doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-3 bg-accent text-text font-heading font-semibold text-sm uppercase px-7 py-3.5 hover:bg-accent/90 transition-colors duration-200"
        style={{ letterSpacing: '0.12em' }}
      >
        Go home
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
          <path d="M0 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </div>
  );
}
