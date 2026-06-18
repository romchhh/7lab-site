'use client'

import { useId, useState } from 'react'
import styles from './FaqAccordion.module.css'

type FaqItem = { q: string; a: string }

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <div className={styles.list}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `${baseId}-panel-${index}`

        return (
          <div key={item.q} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
            <button
              type="button"
              className={styles.trigger}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
            >
              <span className={styles.question}>{item.q}</span>
              <span className={styles.icon} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M8 3.5 V12.5" />
                  <path d="M3.5 8 H12.5" />
                </svg>
              </span>
            </button>

            <div
              id={panelId}
              className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}
              role="region"
              aria-hidden={!isOpen}
            >
              <div className={styles.panelInner}>
                <p className={styles.answer}>{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
