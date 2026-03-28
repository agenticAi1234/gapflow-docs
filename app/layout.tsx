import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { RootProvider } from 'fumadocs-ui/provider'
import './global.css'

const inter = Inter({
  subsets: ['latin'],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}

export const metadata = {
  title: 'Gapflow',
  description:
    'Build agents in seconds with a drag and drop workflow builder. Access comprehensive documentation to help you create efficient workflows and maximize your automation capabilities.',
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: [{ url: '/brand/gapcloud-mark.svg', type: 'image/svg+xml' }],
    apple: '/brand/gapcloud-mark.svg',
    shortcut: '/brand/gapcloud-mark.svg',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Gapflow Docs',
  },
}
