'use client'
import { useState, useEffect } from 'react'
import BrandLogo from './BrandLogo'
import { CATALOG_URL, RESULTS_URL, SITE_NAV } from '../site'
import styles from './Navbar.module.css'

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isTransparent = transparent && !scrolled

  return (
    <>
      <header className={`${styles.header} ${isTransparent ? styles.transparent : styles.solid}`}>
        <nav className={styles.nav} aria-label="Головна навігація">
          <BrandLogo className={styles.brand} />

          <div className={styles.center}>
            {SITE_NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                {...('external' in item && item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className={styles.right}>
            <a href={CATALOG_URL} className={`${styles.cta} ${styles.ctaPrimary}`}>
              Каталог аналізів
            </a>
            <a href={RESULTS_URL} className={`${styles.cta} ${styles.ctaSecondary}`} target="_blank" rel="noopener noreferrer">
              Результати
            </a>
          </div>

          <div className={styles.mobileRight}>
            <a href={RESULTS_URL} className={`${styles.cta} ${styles.ctaSecondary} ${styles.mobileResults}`} target="_blank" rel="noopener noreferrer">
              Результати
            </a>
            <button className={styles.hamburger} onClick={() => setMenuOpen(true)} aria-label="Відкрити меню">
              <span /><span /><span />
            </button>
          </div>
        </nav>
      </header>

      <div className={`${styles.drawer} ${menuOpen ? styles.open : ''}`} role="dialog" aria-modal="true" aria-label="Мобільне меню">
        <button className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label="Закрити">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
            <path d="M4 4 L24 24 M24 4 L4 24" />
          </svg>
        </button>
        <BrandLogo href={undefined} size="sm" className={styles.drawerBrand} />
        {SITE_NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            {...('external' in item && item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {item.label}
          </a>
        ))}
        <a href={CATALOG_URL} className={`${styles.drawerCta} ${styles.drawerCtaPrimary}`} onClick={() => setMenuOpen(false)}>
          Каталог аналізів
        </a>
      </div>
    </>
  )
}
