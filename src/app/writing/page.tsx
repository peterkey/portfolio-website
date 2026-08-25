import { getAllPosts } from '@/lib/writing';
import WritingList from './WritingList';

export default function WritingPage() {
  const posts = getAllPosts();
  return <WritingList posts={posts} />;
}
