import Image from 'next/image'
import { SITE_LOGO_DARK } from '../site'
import styles from './HeroVisual.module.css'

export default function HeroVisual() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.analyzer}>
        <div className={styles.analyzerTop} />
        <div className={styles.analyzerBody}>
          <div className={styles.analyzerScreen}>
            <Image
              src={SITE_LOGO_DARK}
              alt=""
              width={120}
              height={40}
              className={styles.screenLogo}
            />
            <span className={styles.screenLabel}>Cobas / Maglumi</span>
          </div>
          <div className={styles.analyzerPanel}>
            <span className={styles.panelDot} />
            <span className={styles.panelDot} />
            <span className={styles.panelDot} />
          </div>
        </div>
        <div className={styles.analyzerBase} />
      </div>

      <div className={styles.phone}>
        <div className={styles.phoneNotch} />
        <div className={styles.phoneScreen}>
          <p className={styles.phoneHeader}>Результати</p>
          <div className={styles.resultRow}>
            <span>Глюкоза</span>
            <span className={styles.resultOk}>5.2</span>
          </div>
          <div className={styles.resultRow}>
            <span>Гемоглобін</span>
            <span className={styles.resultOk}>142</span>
          </div>
          <div className={styles.resultRow}>
            <span>ТТГ</span>
            <span className={styles.resultOk}>2.1</span>
          </div>
          <div className={styles.phoneBadge}>Готово ✓</div>
        </div>
      </div>
    </div>
  )
}
