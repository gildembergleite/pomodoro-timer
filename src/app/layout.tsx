import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Pomodoro Timer',
  description:
    'Boost productivity with focused work intervals and short breaks.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} flex w-full h-screen justify-center items-center bg-gray-background md:px-10`}
      >
        <div className="flex flex-col justify-start items-center w-full h-screen md:h-5/6 max-w-6xl bg-gray-elements md:rounded-lg">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
