import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/blog', label: 'Blog' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <button
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="nav-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>
      <ul
        id="nav-menu"
        className={`${styles.menu} ${open ? styles.menuOpen : ''}`}
        role="list"
      >
        {NAV_LINKS.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.linkActive : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
