import type { WPPost } from '../../services/wordpress';
import PostCard from '../PostCard/PostCard';
import styles from './PostList.module.css';

interface PostListProps {
  posts: WPPost[];
}

export default function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return <p className={styles.empty}>No posts found.</p>;
  }

  return (
    <ul className={styles.grid} role="list">
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
