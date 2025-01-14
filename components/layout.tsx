import { Overpass } from 'next/font/google'

const overpass = Overpass({ subsets: ['latin'], weight: ['400', '700'] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`min-h-screen flex items-center justify-center bg-[hsl(216,12%,8%)] ${overpass.className}`}>
      {children}
    </div>
  )
}

