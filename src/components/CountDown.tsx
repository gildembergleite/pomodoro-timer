// eslint-disable-next-line camelcase
import { Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['700'] })

interface CountDownProps {
  minutesFormatted: string
  secondsFormatted: string
}

export default function CountDown({
  minutesFormatted,
  secondsFormatted,
}: CountDownProps) {
  return (
    <div className={`${robotoMono.className} flex py-16 lg:gap-4 gap-2`}>
      <span className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] px-4 py-6 rounded-lg leading-none bg-gray-count">
        {minutesFormatted[0]}
      </span>
      <span className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] px-4 py-6 rounded-lg leading-none bg-gray-count">
        {minutesFormatted[1]}
      </span>
      <span className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] px-4 py-6 rounded-lg leading-none text-red-default">
        :
      </span>
      <span className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] px-4 py-6 rounded-lg leading-none bg-gray-count">
        {secondsFormatted[0]}
      </span>
      <span className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] px-4 py-6 rounded-lg leading-none bg-gray-count">
        {secondsFormatted[1]}
      </span>
    </div>
  )
}
