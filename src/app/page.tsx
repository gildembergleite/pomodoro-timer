'use client'
// eslint-disable-next-line camelcase
import { Roboto_Mono } from 'next/font/google'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
import Button from '@/components/Button'

const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['700'] })

const newCycleFormSchema = z.object({
  task: z
    .string()
    .min(3, 'A descrição da tarefa deve ter no mínimo 3 caracteres'),
  minutes: z
    .number()
    .min(5, 'O ciclo deve ter no mínimo 05 minutos')
    .max(60, 'O ciclo deve ter no máximo 60 minutos')
    .multipleOf(5),
})

type NewCycleFormDataProps = z.infer<typeof newCycleFormSchema>

interface CycleProps {
  id: string
  task: string
  minutes: number
  startDate: Date
  interruptedDate?: Date
}

export default function Home() {
  const [cycles, setCycles] = useState<CycleProps[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>()
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const { register, handleSubmit, reset, watch } =
    useForm<NewCycleFormDataProps>({
      resolver: zodResolver(newCycleFormSchema),
    })

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>

    if (activeCycle) {
      interval = setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate),
        )
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle])

  function onSubmit(data: NewCycleFormDataProps) {
    const id = String(new Date().getTime())

    const newCycle: CycleProps = {
      id,
      task: data.task,
      minutes: data.minutes,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    reset()
  }

  function interruptCycle() {
    setCycles(
      cycles.map((cycle) => {
        if (cycle.id !== activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
  }

  const totalSeconds = activeCycle ? activeCycle.minutes * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutesFormatted = String(minutesAmount).padStart(2, '0')
  const secondsFormatted = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `Timer ${minutesFormatted}:${secondsFormatted}`
    }
  }, [activeCycle, minutesFormatted, secondsFormatted])

  const task = watch('task')
  const minutes = watch('minutes')
  const isSubmitDisabled = !task || !minutes

  return (
    <main className="flex w-full h-[calc(100vh-94px)] lg:h-full text-gray-title py-10 lg:py-0">
      <section className="flex flex-col w-full h-full justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="font-bold" action="">
          <div className="flex flex-col text-2xl sm:text-3xl lg:text-lg lg:flex-row w-full items-center gap-2">
            <label htmlFor="task">Vou trabalhar em:</label>
            <input
              className="flex-1 p-2 text-center lg:text-left bg-gray-elements placeholder:text-gray-placeholder border-b-2 border-gray-placeholder focus:border-gray-title focus:outline-none"
              placeholder="nome da atividade"
              list="task-suggestions"
              type="text"
              id="task"
              disabled={!!activeCycle}
              {...register('task')}
            />
            <datalist id="task-suggestions">
              <option value="Trabalho 1" />
              <option value="Trabalho 2" />
              <option value="Trabalho 3" />
            </datalist>

            <div className="flex items-center gap-2">
              <label htmlFor="minutes">durante</label>
              <input
                className="w-20 p-2 bg-gray-elements border-gray-placeholder focus:border-gray-title border-b-2 focus:outline-none text-center"
                placeholder="00"
                max={60}
                min={5}
                step={5}
                type="number"
                id="minutes"
                disabled={!!activeCycle}
                {...register('minutes', { valueAsNumber: true })}
              />

              <span>minutos.</span>
            </div>
          </div>

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

          <Button
            onInterruptCycle={interruptCycle}
            disabled={isSubmitDisabled}
            started={!!activeCycle}
          />
        </form>
      </section>
    </main>
  )
}
