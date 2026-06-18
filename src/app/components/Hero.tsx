import Image from 'next/image'
import Link from 'next/link'
import {
  CATALOG_URL,
  HERO_DESCRIPTION,
  RESULTS_URL,
  SITE_HERO_IMAGE,
  SITE_NAME,
} from '../site'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} data-hero aria-label="Головний банер 7ЛАБ">
      <div className={styles.bg}>
        <Image
          src={SITE_HERO_IMAGE}
          alt={`Лабораторія ${SITE_NAME}: швидкі аналізи у вашій амбулаторії`}
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.bgDim} aria-hidden="true" />
      </div>

      <div className={styles.body}>
        <div className={styles.textBlock}>
          <h1 className={styles.headline}>
            Лабораторія <em>7Лаб</em>
            <span className={styles.brandColon}>:</span>{' '}
            <span className={styles.highlight}>швидкі аналізи у вашій амбулаторії</span>
          </h1>
          <p className={styles.desc}>{HERO_DESCRIPTION}</p>
        </div>

        <div className={styles.actions}>
          <Link href={CATALOG_URL} className={`${styles.btn} ${styles.btnPrimary}`}>
            Каталог аналізів
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 14 L14 2 M6 2 H14 V10" />
            </svg>
          </Link>
          <a href={RESULTS_URL} className={`${styles.btn} ${styles.btnSecondary}`} target="_blank" rel="noopener noreferrer">
            Результати
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 14 L14 2 M6 2 H14 V10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
