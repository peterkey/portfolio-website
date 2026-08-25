'use client';

import { usePathname } from 'next/navigation';

// Forces React to unmount and remount all page content when the route changes.
// Without this, Next.js App Router restores pages from its router cache,
// which means Framer Motion entrance animations never replay on return navigation.
export default function RouteKey({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <div key={pathname} style={{ display: 'contents' }}>{children}</div>;
}
