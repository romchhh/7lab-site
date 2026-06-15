import BrandLogo from './BrandLogo'
import { SITE_EMAIL, SITE_NAME, SITE_PHONE_DISPLAY } from '../site'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <nav className={styles.links} aria-label="Навігація в підвалі">
          <a href="#programa">Програма</a>
          <a href="#faq">Питання</a>
          <a href="#pro-marafon">Про марафон</a>
        </nav>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h3>Формат</h3>
            <p>10 тем за 10 занять</p>
            <p>70 днів підтримки від куратора</p>
          </div>

          <div className={styles.col}>
            <h3>Контакт</h3>
            <p>Онлайн-формат</p>
            <p>{SITE_PHONE_DISPLAY}</p>
            <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
          </div>

          <div className={styles.col}>
            <h3>Соцмережі</h3>
            <a href="#">INSTAGRAM</a>
            <a href="#">FACEBOOK</a>
            <a href="#">TIKTOK</a>
          </div>
        </div>
      </div>

      <div className={styles.wordmark}>
        <BrandLogo href={undefined} size="lg" variant="dark" />
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} {SITE_NAME}. Усі права захищені.</span>
        <a href="#">Політика конфіденційності</a>
      </div>
    </footer>
  )
}
