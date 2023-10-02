'use client'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import { PiScrollLight, PiTimerLight } from 'react-icons/pi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const linkStyle =
    'text-3xl p-3 border-y-[3px] border-y-gray-elements hover:border-b-green-default'

  return (
    <header className="w-full mt-10">
      <div className="flex items-center justify-between px-4 md:px-10">
        <Link href="/" className="flex justify-center items-end gap-2">
          <Image width={42} height={42} src={logo} alt="Hourglass" />
          <h1 className="font-bold text-xl md:text-3xl lg:text-3xl text-gray-title">
            Pomodoro Timer
          </h1>
        </Link>
        <div className="flex gap-3">
          <Link
            href="/"
            className={`${linkStyle} ${
              pathname === '/' ? 'text-green-default' : 'text-gray-title'
            }`}
          >
            <PiTimerLight />
          </Link>
          <Link
            href="/history"
            className={`${linkStyle} ${
              pathname === '/history' ? 'text-green-default' : 'text-white'
            }`}
          >
            <PiScrollLight />
          </Link>
        </div>
      </div>
    </header>
  )
}
