import {
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_FAQ,
  SITE_HERO_IMAGE,
  SITE_LOGO,
  SITE_NAME,
  SITE_PHONE,
  SITE_TITLE,
  SITE_URL,
} from '../site'

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function StructuredData() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${SITE_LOGO}`,
    image: `${SITE_URL}${SITE_HERO_IMAGE}`,
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    description: SITE_DESCRIPTION,
    sameAs: [],
  }

  const course = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: '10-тижневий марафон англійської',
    description: SITE_DESCRIPTION,
    provider: {
      '@type': 'EducationalOrganization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    educationalLevel: 'Beginner',
    inLanguage: 'uk',
    offers: {
      '@type': 'Offer',
      price: '490',
      priceCurrency: 'UAH',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/#kontakt`,
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT1H',
    },
  }

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    inLanguage: 'uk-UA',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      '@type': 'Thing',
      name: 'Марафон англійської мови',
    },
    primaryImageOfPage: `${SITE_URL}${SITE_HERO_IMAGE}`,
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SITE_FAQ.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <>
      <JsonLd data={organization} />
      <JsonLd data={course} />
      <JsonLd data={webPage} />
      <JsonLd data={faqPage} />
    </>
  )
}
