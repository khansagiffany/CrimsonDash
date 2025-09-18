import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Futuristic Sales Dashboard',
  description: 'A modern, responsive sales dashboard built with Next.js 15, TypeScript, and atomic design principles. Features interactive charts, custom filtering, and a futuristic red theme.',
  keywords: [
    'sales dashboard',
    'Next.js',
    'TypeScript',
    'analytics',
    'charts',
    'data visualization',
    'atomic design',
    'Tailwind CSS',
  ],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    title: 'Futuristic Sales Dashboard',
    description: 'Interactive sales analytics with modern web technologies',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Futuristic Sales Dashboard',
    description: 'Interactive sales analytics with modern web technologies',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#820000" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-background-DEFAULT text-text-primary">
          {children}
        </div>
      </body>
    </html>
  )
}