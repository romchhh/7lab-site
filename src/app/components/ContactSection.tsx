'use client'
import Image from 'next/image'
import { useState } from 'react'
import ConsentLabel from './ConsentLabel'
import { SITE_CONTACT_BG_IMAGE, SITE_HOURS, SITE_PHONE, SITE_PHONE_DISPLAY } from '../site'
import styles from './ContactSection.module.css'

type FormState = { name: string; phone: string; comment: string; consent: boolean }

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', comment: '', consent: false })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    setForm(f => ({ ...f, [k]: val }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.consent) return

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          comment: form.comment,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Не вдалося надіслати заявку')
      }

      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Сталася помилка. Спробуйте ще раз.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="kontakt" className={styles.section}>
      <div className={styles.shell}>
        <div className={styles.bg} aria-hidden="true">
          <Image
            src={SITE_CONTACT_BG_IMAGE}
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 1240px"
            className={styles.bgImage}
          />
          <div className={styles.bgOverlay} />
        </div>

        <div className={styles.shellInner}>
          <div className={styles.info}>
          <h2 className={styles.heading}>Залишити заявку</h2>
          <p className={styles.lead}>
            Маєте питання щодо аналізів, підготовки або пунктів забору? Залиште контакти — ми передзвонимо найближчим часом.
          </p>

          <div className={styles.metaGrid}>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Гаряча лінія</span>
              <a href={`tel:${SITE_PHONE}`} className={styles.metaValue}>
                {SITE_PHONE_DISPLAY}
              </a>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Графік роботи</span>
              <span className={styles.metaValue}>{SITE_HOURS}</span>
            </div>
          </div>
        </div>

        <div className={styles.formCard}>
          {sent ? (
            <div className={styles.success}>
              <p className={styles.successTitle}>Дякуємо!</p>
              <p className={styles.successText}>
                Заявку отримано. Ми зв&apos;яжемося з вами за номером {form.phone}.
              </p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="name">ПІБ</label>
                <input id="name" type="text" placeholder="Введіть прізвище та ім'я" value={form.name} onChange={set('name')} required />
              </div>
              <div className={styles.field}>
                <label htmlFor="phone">Номер телефону</label>
                <input id="phone" type="tel" placeholder="Ваш номер телефону" value={form.phone} onChange={set('phone')} required />
              </div>
              <div className={styles.field}>
                <label htmlFor="comment">Коментар <span className={styles.optional}>(необов&apos;язково)</span></label>
                <textarea id="comment" placeholder="Ваше питання..." rows={3} value={form.comment} onChange={set('comment')} />
              </div>
              <label className={styles.consent}>
                <input type="checkbox" checked={form.consent} onChange={set('consent')} required />
                <span><ConsentLabel /></span>
              </label>

              {error && <p className={styles.error}>{error}</p>}

              <button type="submit" className={styles.submit} disabled={!form.consent || loading}>
                {loading ? 'Надсилання…' : 'Надіслати заявку'}
                {!loading && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 14 L14 2 M6 2 H14 V10"/>
                  </svg>
                )}
              </button>
            </form>
          )}
        </div>
        </div>
      </div>
    </section>
  )
}
