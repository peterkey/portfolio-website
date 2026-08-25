import { notFound } from 'next/navigation';
import { getPost, getAllPosts, renderContent } from '@/lib/writing';
import PostHeader from './PostHeader';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Peter Williams-Key`,
    description: post.summary,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || post.draft) notFound();

  const html = await renderContent(post.content);

  return (
    <div className="pt-32 pb-24 md:pb-32 bg-ink min-h-screen">
      <div className="container-site">
        <div className="max-w-[70ch] mx-auto">
          <PostHeader
            title={post.title}
            date={post.date}
            tags={post.tags}
            readingTime={post.readingTime}
          />
          {/* HTML is generated server-side from local markdown files and sanitized */}
          {/* eslint-disable-next-line react/no-danger */}
          <div
            className="prose-writing animate-fade-in"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  );
}
