import { useEffect, useReducer } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPostBySlug, type WPPost } from '../../services/wordpress';
import styles from './PostPage.module.css';

interface State {
  post: WPPost | null;
  loading: boolean;
  error: string | null;
}

type Action =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: WPPost | null }
  | { type: 'FETCH_ERROR'; payload: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'FETCH_START':
      return { post: null, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return {
        post: action.payload,
        loading: false,
        error: action.payload ? null : 'Post not found.',
      };
    case 'FETCH_ERROR':
      return { post: null, loading: false, error: action.payload };
    default:
      return state;
  }
}

const initialState: State = { post: null, loading: true, error: null };

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { post, loading, error } = state;

  useEffect(() => {
    if (!slug) return;
    dispatch({ type: 'FETCH_START' });
    getPostBySlug(slug)
      .then((data) => dispatch({ type: 'FETCH_SUCCESS', payload: data }))
      .catch((err: unknown) =>
        dispatch({
          type: 'FETCH_ERROR',
          payload: err instanceof Error ? err.message : 'Failed to load post',
        }),
      );
  }, [slug]);

  const featuredImage = post?._embedded?.['wp:featuredmedia']?.[0];
  const date = post
    ? new Date(post.date).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  return (
    <main className={styles.main}>
      <div className="container">
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className={styles.sep} aria-hidden>
            /
          </span>
          <Link to="/blog">Blog</Link>
          {post && (
            <>
              <span className={styles.sep} aria-hidden>
                /
              </span>
              <span
                aria-current="page"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
            </>
          )}
        </nav>

        {loading && <p className={styles.status}>Loading…</p>}
        {error && <p className={styles.statusError}>{error}</p>}

        {post && (
          <article className={styles.article}>
            {featuredImage && (
              <img
                src={featuredImage.source_url}
                alt={featuredImage.alt_text}
                className={styles.featuredImage}
              />
            )}
            <header className={styles.header}>
              <time className={styles.date} dateTime={post.date}>
                {date}
              </time>
              <h1
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
            </header>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </article>
        )}
      </div>
    </main>
  );
}
