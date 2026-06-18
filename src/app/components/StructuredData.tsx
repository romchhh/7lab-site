import {
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_HERO_IMAGE,
  SITE_LOGO,
  SITE_NAME,
  SITE_PHONE,
  SITE_TITLE,
  SITE_URL,
  SOCIAL_LINKS,
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
    '@type': 'MedicalOrganization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${SITE_LOGO}`,
    image: `${SITE_URL}${SITE_HERO_IMAGE}`,
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    description: SITE_DESCRIPTION,
    slogan: 'Лабораторія та мережа пунктів забору при амбулаторіях',
    sameAs: Object.values(SOCIAL_LINKS),
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'uk-UA',
    description: SITE_DESCRIPTION,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: `${SITE_URL}${SITE_LOGO}`,
    },
  }

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    inLanguage: 'uk-UA',
    isPartOf: { '@id': `${SITE_URL}#website` },
    about: {
      '@type': 'Thing',
      name: 'Лабораторна діагностика',
    },
    primaryImageOfPage: `${SITE_URL}${SITE_HERO_IMAGE}`,
  }

  return (
    <>
      <JsonLd data={{ ...website, '@id': `${SITE_URL}#website` }} />
      <JsonLd data={organization} />
      <JsonLd data={webPage} />
    </>
  )
}
