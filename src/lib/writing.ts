import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import sanitizeHtml from 'sanitize-html';

const WRITING_DIR = path.join(process.cwd(), 'content', 'writing');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  draft: boolean;
  readingTime: number;
}

export interface Post extends PostMeta {
  content: string;
}

function calcReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(WRITING_DIR)) return [];

  return fs
    .readdirSync(WRITING_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace('.mdx', '');
      const raw = fs.readFileSync(path.join(WRITING_DIR, file), 'utf-8');
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        tags: (data.tags as string[]) || [],
        summary: (data.summary as string) || '',
        draft: (data.draft as boolean) || false,
        readingTime: calcReadingTime(content),
      };
    })
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(WRITING_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    tags: (data.tags as string[]) || [],
    summary: (data.summary as string) || '',
    draft: (data.draft as boolean) || false,
    readingTime: calcReadingTime(content),
    content,
  };
}

export async function renderContent(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown);

  return sanitizeHtml(result.toString(), {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'img', 'pre', 'code', 'span',
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      '*': ['class'],
      a: ['href', 'target', 'rel'],
      img: ['src', 'alt', 'width', 'height'],
      code: ['class'],
      span: ['class'],
      pre: ['class'],
    },
  });
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
