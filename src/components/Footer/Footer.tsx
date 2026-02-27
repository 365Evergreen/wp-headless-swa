import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>&copy; {year} WP Headless. All rights reserved.</p>
      </div>
    </footer>
  );
}
