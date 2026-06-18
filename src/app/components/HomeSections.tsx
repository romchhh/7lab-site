import Image from 'next/image'
import Link from 'next/link'
import FaqAccordion from './FaqAccordion'
import PickupMap from './PickupMap'
import {
  CATALOG_URL,
  LAB_PROMOTIONS,
  LAB_STATS,
  LAB_TECHNOLOGY,
  PATIENT_ROUTE,
  SITE_FAQ,
  SITE_MISSION,
  SITE_PHONE_IMAGE,
  SITE_VISION,
} from '../site'
import base from './sections.module.css'
import styles from './HomeSections.module.css'

function SectionTitle({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <h2 className={light ? base.headingLight : base.heading}>{children}</h2>
}

function PromotionIcon({ type }: { type: (typeof LAB_PROMOTIONS)[number]['icon'] }) {
  const props = {
    width: 80,
    height: 80,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  if (type === 'military') {
    return (
      <svg {...props}>
        <path d="M12 3l7 3v5c0 4.6-3.1 7.5-7 9.2-3.9-1.7-7-4.6-7-9.2V6l7-3z" />
        <path d="M12 8.5v4.8" />
        <path d="M9.8 11h4.4" />
      </svg>
    )
  }

  if (type === 'checkup') {
    return (
      <svg {...props}>
        <path d="M4 12h2.2l2.3-5.5L12 14l2.8-9 2.2 5.5H20" />
      </svg>
    )
  }

  return (
    <svg {...props}>
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <path d="M12 8V5.8a2.2 2.2 0 0 0-4.4 0V8" />
      <path d="M12 8V5.8a2.2 2.2 0 0 1 4.4 0V8" />
      <path d="M12 12v3.5" />
      <path d="M10.2 13.8h3.6" />
    </svg>
  )
}

export default function HomeSections() {
  return (
    <>
      {/* Intro + smartphone */}
      <section id="katalog" className={`${base.section} ${base.light}`}>
        <div className={base.container}>
          <div className={base.introPanel}>
            <div className={styles.introTop}>
              <h2 className={`${base.introHeading} ${styles.introHeading}`}>
                Чи доводилося чекати на результати аналізів <span>днями?</span>
              </h2>

              <div className={styles.phoneWrap}>
                <Image
                  src={SITE_PHONE_IMAGE}
                  alt="Результати аналізів 7ЛАБ на смартфоні"
                  width={700}
                  height={1443}
                  sizes="(max-width: 768px) min(46vw, 170px), min(36vw, 340px)"
                  className={styles.phoneImage}
                  priority
                />
              </div>

              <div className={styles.introBody}>
                <div className={base.introGrid}>
                  <div className={base.introCol}>
                    <p className={base.proseLead}>
                      Замовляли дослідження. Чекали SMS. Дзвонили в лабораторію. Ходили за паперовою довідкою.
                    </p>
                    <p>
                      А коли потрібно було показати результат лікарю,{' '}
                      <strong>аналізи десь губилися або запізнювалися.</strong>
                    </p>
                  </div>

                  <div className={base.introCol}>
                    <p className={base.emphasis}>Знайомо?</p>
                    <p>
                      Ви не один такий. Більшість пацієнтів втрачають час через розірваний сервіс
                      і відсутність зручного цифрового доступу до результатів.
                    </p>
                  </div>
                </div>

                <p className={base.leadBox}>
                  Саме тому ми створили <strong>7ЛАБ</strong> — лабораторію нового покоління, де{' '}
                  <em>результати доступні на смартфоні</em> вже через кілька годин після забору.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient route */}
      <section id="marshrut" className={`${base.section} ${styles.routeSection}`}>
        <div className={base.container}>
          <div className={styles.routeHeader}>
            <h2 className={styles.routeHeading}>Маршрут пацієнта</h2>
            <p className={styles.routeLead}>
              Чотири кроки від замовлення до результату — без зайвих поїздок і очікувань.
            </p>
          </div>

          <ol className={styles.routeTrack}>
              {PATIENT_ROUTE.map((item, i) => (
                <li
                  key={item.step}
                  className={`${styles.routeItem} ${i === PATIENT_ROUTE.length - 1 ? styles.routeItemFinish : styles.routeItemProcess}`}
                >
                  <div className={styles.routeMarker} aria-hidden="true">
                    <span className={styles.routeIcon}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className={styles.routeBody}>
                    <h3 className={styles.routeTitle}>{item.step}</h3>
                    <p className={styles.routeDesc}>{item.desc}</p>
                  </div>

                  {i < PATIENT_ROUTE.length - 1 && (
                    <span className={styles.routeArrow} aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9 H15 M10 4 L15 9 L10 14" />
                      </svg>
                    </span>
                  )}
                </li>
              ))}
            </ol>
        </div>
      </section>

      {/* Technology */}
      <section className={`${base.section} ${base.lightToMuted}`}>
        <div className={base.container}>
          <SectionTitle>Технологічне серце лабораторії</SectionTitle>
          <div className={styles.techGrid}>
            {LAB_TECHNOLOGY.map((tech) => (
              <article key={tech.name} className={styles.techCard}>
                <div className={styles.techVisual}>
                  <span className={styles.techBadge}>Обладнання</span>
                  <strong>{tech.name}</strong>
                </div>
                <div className={styles.techBody}>
                  <p>{tech.desc}</p>
                  <ul className={styles.techPerks}>
                    {tech.perks.map((perk) => (
                      <li key={perk}>{perk}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.techCtaWrap}>
            <Link href={CATALOG_URL} className={styles.techCta}>
              Переглянути каталог аналізів
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 14 L14 2 M6 2 H14 V10" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section id="aktsii" className={`${base.section} ${base.muted}`}>
        <div className={base.container}>
          <SectionTitle>Акції та спеціальні пропозиції</SectionTitle>
          <div className={base.prizeGrid}>
            {LAB_PROMOTIONS.map((promo) => (
              <div key={promo.title} className={`${base.prizeCard} ${'featured' in promo && promo.featured ? base.prizeFeatured : ''}`}>
                <span className={styles.promoIcon}>
                  <PromotionIcon type={promo.icon} />
                </span>
                <p className={base.prizeTitle}>{promo.title}</p>
                <p className={base.prizeDesc}>{promo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="pro-nas" className={`${base.section} ${base.dark} brand-glow`}>
        <div className={base.container}>
          <SectionTitle light>Про нас</SectionTitle>
          <div className={styles.aboutGrid}>
            <div className={styles.manifesto}>
              <p className={styles.manifestoLead}>{SITE_MISSION}</p>
              <p className={styles.manifestoVision}>{SITE_VISION}</p>
            </div>
            <div className={styles.statsGrid}>
              {LAB_STATS.map((stat) => (
                <div key={stat.label} className={styles.statCard}>
                  <p className={styles.statValue}>{stat.value}</p>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="punkty" className={`${base.section} ${base.whiteFromDark}`}>
        <div className={base.container}>
          <SectionTitle>Пункти забору</SectionTitle>
          <p className={styles.mapLead}>
            Оберіть зручну локацію в Ірпені, Гостомелі або Михайлівці-Рубежівці — пункти забору працюють при амбулаторіях ПМСД.
          </p>
          <PickupMap />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={`${base.section} ${base.mutedFromWhite}`}>
        <div className={base.container}>
          <SectionTitle>Відповіді на популярні питання</SectionTitle>
          <FaqAccordion items={[...SITE_FAQ]} />
        </div>
      </section>
    </>
  )
}
