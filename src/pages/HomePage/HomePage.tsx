import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostList from '../../components/PostList/PostList';
import { getPosts, type WPPost } from '../../services/wordpress';
import styles from './HomePage.module.css';

export default function HomePage() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPosts(1, 6)
      .then(setPosts)
      .catch((err: unknown) => setError(err instanceof Error ? err.message : 'Failed to load posts'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroHeading}>Welcome to WP Headless</h1>
          <p className={styles.heroSubtitle}>
            A blazing-fast WordPress headless frontend powered by React, Vite, and Azure Static Web
            Apps.
          </p>
          <Link to="/blog" className={styles.heroCta}>
            Read the Blog
          </Link>
        </div>
      </section>

      {/* Latest posts */}
      <section className={styles.postsSection}>
        <div className="container">
          <h2 className={styles.sectionHeading}>Latest Posts</h2>
          {loading && <p className={styles.status}>Loading posts…</p>}
          {error && <p className={styles.statusError}>{error}</p>}
          {!loading && !error && <PostList posts={posts} />}
          {!loading && !error && (
            <div className={styles.seeAll}>
              <Link to="/blog" className={styles.seeAllLink}>
                See all posts →
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
