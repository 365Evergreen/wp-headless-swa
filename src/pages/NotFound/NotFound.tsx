import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.code}>404</p>
          <h1 className={styles.heading}>Page not found</h1>
          <p className={styles.message}>
            Sorry, we couldn&apos;t find the page you were looking for.
          </p>
          <Link to="/" className={styles.homeLink}>
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
