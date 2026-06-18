import type { Metadata, Viewport } from 'next'
import { montserrat } from './fonts'
import FloatingContact from './components/FloatingContact'
import { rootMetadata } from './seo'
import './globals.css'
import './site.css'

export const metadata: Metadata = rootMetadata

export const viewport: Viewport = {
  themeColor: '#2D3142',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={montserrat.variable}>
      <body className={montserrat.className}>
        {children}
        <FloatingContact />
      </body>
    </html>
  )
}
