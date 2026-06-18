export const SITE_NAME = '7ЛАБ'
export const SITE_SHORT_NAME = '7ЛАБ'
export const SITE_LOGO = '/images/logo-7lab.png'
export const SITE_LOGO_DARK = '/images/logo-7lab-dark.png'
export const SITE_HERO_IMAGE = '/images/Gemini_Generated_Image_f2287jf2287jf228.png'
export const SITE_PHONE_IMAGE = '/images/ChatGPT Image Jun 19, 2026, 12_37_07 AM 1.png'

function normalizeSiteUrl(url: string): string {
  const trimmed = url.trim().replace(/\/$/, '')
  if (!trimmed) return 'https://7lab.ua'
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  return `https://${trimmed}`
}

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://7lab.ua',
)

export const SITE_TITLE = `${SITE_NAME} | Лабораторні аналізи`
export const SITE_DESCRIPTION =
  '7ЛАБ — лабораторія та мережа пунктів забору крові нового покоління при амбулаторіях ПМСД. Швидкі аналізи, автоматизація, точність і зручний маршрут пацієнта в Ірпені, Гостомелі та Михайлівці-Рубежівці.'

export const SITE_MISSION =
  'Робити лабораторну діагностику швидкою, точною та зрозумілою, поєднуючи сучасний цифровий сервіс, зручний доступ до пунктів забору та комфортний маршрут пацієнта.'

export const SITE_VISION =
  'Створити сильний сучасний бренд лабораторної діагностики, який поєднує медичну точність, цифрові рішення та зручну мережу присутності.'

export const SITE_KEYWORDS = [
  '7ЛАБ',
  '7Лаб',
  'лабораторна діагностика',
  'аналізи крові',
  'пункти забору',
  'Ірпінь',
  'Гостомель',
  'Михайлівка-Рубежівка',
  'чек-ап',
  'результати аналізів',
  'лабораторія при амбулаторії',
]

export const SITE_EMAIL = 'info@7lab.ua'
export const SITE_PHONE = '+380800123456'
export const SITE_PHONE_DISPLAY = '0 800 123 456'
export const SITE_HOTLINE = '0 800 123 456'
export const SITE_HOURS = 'Пн–Пт: 8:00–18:00, Сб: 9:00–14:00'
export const SITE_LICENSE = 'Ліцензія МОЗ України'

export const SITE_THEME_COLOR = '#2D3142'
export const SITE_BG_LIGHT = '#F5F6F8'

export const RESULTS_URL = process.env.NEXT_PUBLIC_RESULTS_URL ?? 'https://helsi.me'
export const CATALOG_URL = '/#katalog'
export const DOCTORS_URL = process.env.NEXT_PUBLIC_DOCTORS_URL ?? '/#kontakt'

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com',
} as const

export const SITE_NAV = [
  { href: '/#katalog', label: 'Каталог аналізів' },
  { href: '/#punkty', label: 'Пункти забору' },
  { href: RESULTS_URL, label: 'Результати', external: true },
  { href: '/#aktsii', label: 'Акції' },
  { href: '/#pro-nas', label: 'Про нас' },
  { href: '/#kontakt', label: 'Контакти' },
] as const

export const FOOTER_NAV = [
  { href: '/#katalog', label: 'Каталог' },
  { href: '/#punkty', label: 'Адреси пунктів' },
  { href: '/#marshrut', label: 'Маршрут пацієнта' },
  { href: '/#pro-nas', label: 'Про нас' },
  { href: '/#aktsii', label: 'Новини' },
] as const

export const PRIVACY_POLICY_PATH = '/privacy'
export const TELEBOTS_URL = 'https://telebots.site/uk'

export const HERO_DESCRIPTION =
  'Сучасна автоматизована діагностика на обладнанні Roche Cobas та Snibe Maglumi. Зручні пункти забору та результати онлайн — точність, на якій можна покластися.'

export const SITE_CONTACT_IMAGE = SITE_LOGO
export const SITE_CONTACT_BG_IMAGE = SITE_HERO_IMAGE

export const PATIENT_ROUTE = [
  { step: 'Оберіть аналізи онлайн', desc: 'Каталог, ціни та запис у кілька кліків' },
  { step: 'Завітайте до амбулаторії', desc: 'Пункт забору поруч із вашим сімейним лікарем' },
  { step: 'Роботизована діагностика', desc: 'Автоматизована обробка на сучасному обладнанні' },
  { step: 'Отримайте результат', desc: 'Результати онлайн на смартфоні або в пункті забору' },
] as const

export const LAB_TECHNOLOGY = [
  {
    name: 'Roche Cobas',
    desc: 'Високопродуктивна аналітична система для біохімії та імунохімії. Мінімум людського фактору, стабільність і швидкість обробки зразків.',
    perks: ['Біохімія та імунохімія', 'Висока пропускна здатність', 'Клінічна точність'],
  },
  {
    name: 'Snibe Maglumi',
    desc: 'Автоматизований імунохемілюмінесцентний аналізатор для широкого спектра досліджень. Надійність і повторюваність результатів.',
    perks: ['Імунологічні тести', 'Автоматизація процесів', 'Широкий спектр аналізів'],
  },
] as const

export const LAB_PROMOTIONS = [
  { icon: 'military', title: '−20% військовим', desc: 'Пільга для військовослужбовців та ветеранів на весь каталог аналізів', featured: true },
  { icon: 'checkup', title: 'Чекап місяця −15%', desc: 'Готові пакети обстежень зі знижкою — оберіть оптимальний набір досліджень' },
  { icon: 'gift', title: 'Святкові знижки', desc: 'Сезонні пропозиції на популярні аналізи та сімейні чекапи' },
] as const

export const LAB_STATS = [
  { value: '100%', label: 'автоматизація ключових процесів' },
  { value: 'ПМСД', label: 'довіра сімейних лікарів мережі' },
  { value: 'від годин', label: 'швидкість отримання результатів' },
] as const

export const PICKUP_LOCATIONS = [
  {
    id: 'irpin',
    name: 'Ірпінь',
    address: 'Пункт забору при амбулаторії, Ірпінь',
    lat: 50.5217,
    lng: 30.1153,
    mapZoom: 14,
  },
  {
    id: 'hostomel',
    name: 'Гостомель',
    address: 'Гостомельська амбулаторія, пункт забору 7ЛАБ',
    lat: 50.5689,
    lng: 30.245,
    mapZoom: 14,
  },
  {
    id: 'mykhailivka',
    name: 'Михайлівка-Рубежівка',
    address: 'Пункт забору при амбулаторії, Михайлівка-Рубежівка',
    lat: 50.472,
    lng: 30.089,
    mapZoom: 14,
  },
] as const

export function googleMapsEmbedUrl(lat: number, lng: number, zoom = 14) {
  return `https://maps.google.com/maps?q=${lat},${lng}&hl=uk&z=${zoom}&output=embed`
}

export function googleMapsOpenUrl(lat: number, lng: number, label?: string) {
  const query = label ? encodeURIComponent(label) : `${lat},${lng}`
  return `https://www.google.com/maps/search/?api=1&query=${query}`
}

export function googleMapsDirectionsUrl(lat: number, lng: number, label?: string) {
  const destination = label ? encodeURIComponent(label) : `${lat},${lng}`
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`
}

export const SITE_FAQ = [
  {
    q: 'Як записатися на аналізи?',
    a: 'Оберіть потрібні дослідження в каталозі, додайте їх до замовлення та оберіть пункт забору.',
  },
  {
    q: 'Чи потрібне направлення лікаря?',
    a: 'Для більшості аналізів направлення не обов\'язкове. Код е-направлення можна вказати при оформленні.',
  },
  {
    q: 'Скільки часу готуються результати?',
    a: 'Від кількох годин для базових аналізів до 1–3 днів для складних тестів.',
  },
  {
    q: 'Де отримати результати?',
    a: 'Результати доступні онлайн через особистий кабінет або у пункті забору.',
  },
  {
    q: 'Як підготуватися до здачі крові?',
    a: 'Загальне правило: здавати кров натщесерце або через 8–12 годин після їжі.',
  },
  {
    q: 'Чи діють знижки?',
    a: 'Військовим — 20%, чекап місяця — 15%. Застосовується найбільша знижка.',
  },
] as const
