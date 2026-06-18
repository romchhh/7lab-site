import type { Metadata, Viewport } from 'next'
import { inter } from './fonts'
import FloatingContact from './components/FloatingContact'
import { rootMetadata } from './seo'
import './globals.css'
import './brand.css'

export const metadata: Metadata = rootMetadata

export const viewport: Viewport = {
  themeColor: '#2D3142',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={inter.variable}>
      <body className={inter.className}>
        {children}
        <FloatingContact />
      </body>
    </html>
  )
}
