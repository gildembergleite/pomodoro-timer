'use client'
// eslint-disable-next-line camelcase
import { Roboto_Mono } from 'next/font/google'
import { CyclesContext } from '@/app/page'
import { useContext, useEffect, useState } from 'react'
import { differenceInSeconds as calcDifferenceInSeconds } from 'date-fns'

const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['700'] })

export default function CountDown() {
  const { activeCycle, markCurrentCycleAsFinished } = useContext(CyclesContext)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const totalSeconds = activeCycle ? activeCycle.minutes * 60 : 0

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutesFormatted = String(minutesAmount).padStart(2, '0')
  const secondsFormatted = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>

    if (activeCycle) {
      interval = setInterval(() => {
        const differenceInSeconds = calcDifferenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )
        if (differenceInSeconds >= totalSeconds) {
          markCurrentCycleAsFinished()
          setAmountSecondsPassed(totalSeconds)
          clearInterval(interval)
          document.title = `Pomodoro Timer`
        } else {
          setAmountSecondsPassed(differenceInSeconds)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, markCurrentCycleAsFinished, totalSeconds])

  useEffect(() => {
    if (activeCycle) {
      document.title = `Timer ${minutesFormatted}:${secondsFormatted}`
    }
  }, [activeCycle, minutesFormatted, secondsFormatted])

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
