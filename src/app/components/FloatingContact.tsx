'use client'

import { useEffect, useState } from 'react'
import ConsentLabel from './ConsentLabel'
import { CONTACT_MODAL_EVENT } from '@/lib/contactModal'
import styles from './FloatingContact.module.css'

type FormState = { name: string; phone: string; comment: string; consent: boolean }

const EMPTY_FORM: FormState = { name: '', phone: '', comment: '', consent: false }

export default function FloatingContact() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const openModal = () => setOpen(true)
    window.addEventListener(CONTACT_MODAL_EVENT, openModal)
    return () => window.removeEventListener(CONTACT_MODAL_EVENT, openModal)
  }, [])

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    setForm((f) => ({ ...f, [k]: val }))
  }

  const close = () => {
    setOpen(false)
    setError('')
    if (sent) {
      setSent(false)
      setForm(EMPTY_FORM)
    }
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
    <>
      <button
        type="button"
        className={styles.fab}
        onClick={() => setOpen(true)}
        aria-label="Зв'язатися з нами"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </button>

      {open && (
        <div className={styles.overlay} onClick={close} role="presentation">
          <div
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.header}>
              <div>
                <h2 id="contact-modal-title" className={styles.title}>Зв&apos;язатися з нами</h2>
                <p className={styles.subtitle}>Залиште контакти — ми передзвонимо найближчим часом</p>
              </div>
              <button type="button" className={styles.close} onClick={close} aria-label="Закрити">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M4 4 L16 16 M16 4 L4 16" />
                </svg>
              </button>
            </div>

            {sent ? (
              <div className={styles.success}>
                <p className={styles.successTitle}>Дякуємо!</p>
                <p className={styles.successText}>
                  Заявку отримано. Ми зв&apos;яжемося з вами за номером {form.phone}.
                </p>
                <button type="button" className={styles.submit} onClick={close}>
                  Закрити
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.field}>
                  <label htmlFor="modal-name">ПІБ</label>
                  <input id="modal-name" type="text" placeholder="Введіть прізвище та ім'я" value={form.name} onChange={set('name')} required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="modal-phone">Номер телефону</label>
                  <input id="modal-phone" type="tel" placeholder="Ваш номер телефону" value={form.phone} onChange={set('phone')} required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="modal-comment">Коментар <span className={styles.optional}>(необов&apos;язково)</span></label>
                  <textarea id="modal-comment" placeholder="Ваше питання..." rows={3} value={form.comment} onChange={set('comment')} />
                </div>
                <label className={styles.consent}>
                  <input type="checkbox" checked={form.consent} onChange={set('consent')} required />
                  <span><ConsentLabel /></span>
                </label>

                {error && <p className={styles.error}>{error}</p>}

                <button type="submit" className={styles.submit} disabled={!form.consent || loading}>
                  {loading ? 'Надсилання…' : 'Надіслати'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
