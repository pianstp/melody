import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#hero" className={styles.logo} onClick={() => handleNav('')}>
          <span className={styles.logoDot} />
          Promise<span style={{ color: 'var(--color-primary)' }}>.</span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`${styles.navLink} ${active === l.href ? styles.active : ''}`}
              onClick={() => handleNav(l.href)}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className={`${styles.navLink} ${styles.cta}`} onClick={() => handleNav('#contact')}>
            Hire Me
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`} aria-hidden={!menuOpen}>
        {links.map((l) => (
          <a key={l.href} href={l.href} className={styles.mobileLink} onClick={() => handleNav(l.href)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className={styles.mobileLink} style={{ color: 'var(--color-primary)', fontWeight: 600 }} onClick={() => handleNav('#contact')}>
          Hire Me →
        </a>
      </div>
    </header>
  );
}
