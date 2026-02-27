import { Link } from 'react-router-dom';
import type { WPPost } from '../../services/wordpress';
import styles from './PostCard.module.css';

interface PostCardProps {
  post: WPPost;
}

export default function PostCard({ post }: PostCardProps) {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
  const date = new Date(post.date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className={styles.card}>
      {featuredImage && (
        <Link to={`/blog/${post.slug}`} className={styles.imageLink} tabIndex={-1} aria-hidden>
          <img
            src={featuredImage.source_url}
            alt={featuredImage.alt_text}
            className={styles.image}
            loading="lazy"
          />
        </Link>
      )}
      <div className={styles.body}>
        <time className={styles.date} dateTime={post.date}>
          {date}
        </time>
        <h2 className={styles.title}>
          <Link
            to={`/blog/${post.slug}`}
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </h2>
        <div
          className={styles.excerpt}
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
        <Link to={`/blog/${post.slug}`} className={styles.readMore}>
          Read more
          <span className={styles.arrow} aria-hidden>
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
