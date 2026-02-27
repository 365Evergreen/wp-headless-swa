import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand}>
          WP Headless
        </Link>
        <Nav />
      </div>
    </header>
  );
}
