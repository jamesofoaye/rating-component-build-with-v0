import type { Metadata } from 'next'
import { Overpass } from 'next/font/google'
import './globals.css'


const overpass = Overpass({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex items-center justify-center bg-[hsl(216,12%,8%)] ${overpass.className}`}>
        {children}
      </body>
    </html>
  )
}
