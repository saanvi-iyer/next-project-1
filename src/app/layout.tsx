import type { Metadata } from 'next'
import { Inter, Nunito} from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito({
  weight: ['400', '400'],
  style: ['normal', 'normal'],
  subsets: ['latin'],
  display: 'swap',})

export const metadata: Metadata = {
  title: 'To-Do List'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-slate-900 text-slate-200 container mx-auto p-4`}
      >
        {children}
      </body>
    </html>
  )
}
