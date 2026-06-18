import { SITE_NAME } from '../site'
import styles from './BrandLogo.module.css'

type Props = {
  href?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function BrandLogo({
  href = '/',
  size = 'md',
  className = '',
}: Props) {
  const content = (
    <span
      className={[
        styles.wordmark,
        size === 'lg' ? styles.lg : '',
        size === 'sm' ? styles.sm : '',
      ].filter(Boolean).join(' ')}
    >
      7Лаб
    </span>
  )

  const classNames = [styles.logo, className].filter(Boolean).join(' ')

  if (!href) {
    return <div className={classNames}>{content}</div>
  }

  return (
    <a href={href} className={classNames} aria-label={SITE_NAME}>
      {content}
    </a>
  )
}
