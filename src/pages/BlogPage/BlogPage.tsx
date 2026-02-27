import { useEffect, useReducer } from 'react';
import PostList from '../../components/PostList/PostList';
import { getPosts, type WPPost } from '../../services/wordpress';
import styles from './BlogPage.module.css';

const PER_PAGE = 9;

interface State {
  posts: WPPost[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  page: number;
}

type Action =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: WPPost[]; page: number }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'LOAD_MORE' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: action.page === 1 ? action.payload : [...state.posts, ...action.payload],
        hasMore: action.payload.length >= PER_PAGE,
      };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'LOAD_MORE':
      return { ...state, page: state.page + 1 };
    default:
      return state;
  }
}

const initialState: State = {
  posts: [],
  loading: true,
  error: null,
  hasMore: true,
  page: 1,
};

export default function BlogPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { posts, loading, error, hasMore, page } = state;

  useEffect(() => {
    dispatch({ type: 'FETCH_START' });
    getPosts(page, PER_PAGE)
      .then((data) => dispatch({ type: 'FETCH_SUCCESS', payload: data, page }))
      .catch((err: unknown) =>
        dispatch({
          type: 'FETCH_ERROR',
          payload: err instanceof Error ? err.message : 'Failed to load posts',
        }),
      );
  }, [page]);

  return (
    <main className={styles.main}>
      <div className="container">
        <h1 className={styles.heading}>Blog</h1>
        {error && <p className={styles.statusError}>{error}</p>}
        <PostList posts={posts} />
        {loading && <p className={styles.status}>Loading…</p>}
        {!loading && hasMore && (
          <div className={styles.loadMore}>
            <button
              className={styles.loadMoreBtn}
              onClick={() => dispatch({ type: 'LOAD_MORE' })}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
