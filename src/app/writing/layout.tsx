import WritingNavbar from './WritingNavbar';
import Footer from '@/app/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing — Peter Williams-Key',
  description: 'Notes and writing from Peter Williams-Key — build diaries, project writeups, and occasional opinions.',
};

export default function WritingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WritingNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
