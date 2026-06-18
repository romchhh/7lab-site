'use client'

import { useState } from 'react'
import {
  googleMapsDirectionsUrl,
  googleMapsEmbedUrl,
  googleMapsOpenUrl,
  PICKUP_LOCATIONS,
} from '../site'
import styles from './PickupMap.module.css'

export default function PickupMap() {
  const [activeId, setActiveId] = useState<(typeof PICKUP_LOCATIONS)[number]['id']>(PICKUP_LOCATIONS[0].id)
  const active = PICKUP_LOCATIONS.find((l) => l.id === activeId) ?? PICKUP_LOCATIONS[0]
  const mapLabel = `${active.name}, ${active.address}`

  return (
    <div className={styles.wrap}>
      <div className={styles.list}>
        {PICKUP_LOCATIONS.map((location) => (
          <button
            key={location.id}
            type="button"
            className={`${styles.location} ${location.id === activeId ? styles.locationActive : ''}`}
            onClick={() => setActiveId(location.id)}
          >
            <span className={styles.pin} aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
            </span>
            <span className={styles.locationText}>
              <strong>{location.name}</strong>
              <span>{location.address}</span>
            </span>
          </button>
        ))}
      </div>

      <div className={styles.mapCol}>
        <div className={styles.mapFrame}>
          <iframe
            key={active.id}
            title={`Google Maps — пункт забору ${active.name}`}
            src={googleMapsEmbedUrl(active.lat, active.lng, active.mapZoom)}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className={styles.map}
          />
        </div>

        <div className={styles.actions}>
          <a
            href={googleMapsOpenUrl(active.lat, active.lng, mapLabel)}
            className={styles.actionSecondary}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Відкрити в Google Maps
          </a>
          <a
            href={googleMapsDirectionsUrl(active.lat, active.lng, mapLabel)}
            className={styles.actionPrimary}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 11h6l3-8 4 18 3-8h5" />
            </svg>
            Прокласти маршрут
          </a>
        </div>
      </div>
    </div>
  )
}
