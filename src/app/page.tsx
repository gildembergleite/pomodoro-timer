'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useEffect, useState } from 'react'
import { differenceInSeconds as calcDifferenceInSeconds } from 'date-fns'
import Button from '@/components/Button'
import CountDown from '@/components/CountDown'
import FormInputs from '@/components/FormInputs'

const newCycleFormSchema = z.object({
  task: z
    .string()
    .min(3, 'A descrição da tarefa deve ter no mínimo 3 caracteres'),
  minutes: z
    .number()
    .min(1, 'O ciclo deve ter no mínimo 05 minutos')
    .max(60, 'O ciclo deve ter no máximo 60 minutos'),
})

type NewCycleFormDataProps = z.infer<typeof newCycleFormSchema>

export interface CycleProps {
  id: string
  task: string
  minutes: number
  startDate: Date
  interruptedDate?: Date
  finshedDate?: Date
}

export default function Home() {
  const [cycles, setCycles] = useState<CycleProps[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>()
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.minutes * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutesFormatted = String(minutesAmount).padStart(2, '0')
  const secondsFormatted = String(secondsAmount).padStart(2, '0')

  const { register, handleSubmit, reset, watch } =
    useForm<NewCycleFormDataProps>({
      resolver: zodResolver(newCycleFormSchema),
    })

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>

    if (activeCycle) {
      interval = setInterval(() => {
        const differenceInSeconds = calcDifferenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )
        if (differenceInSeconds >= totalSeconds) {
          setCycles((state) =>
            state.map((cycle) => {
              if (cycle.id !== activeCycleId) {
                return { ...cycle, finshedDate: new Date() }
              } else {
                return cycle
              }
            }),
          )
          setAmountSecondsPassed(totalSeconds)
          setActiveCycleId(null)
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
  }, [activeCycle, totalSeconds, activeCycleId])

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
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id !== activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    document.title = `Pomodoro Timer`
    setActiveCycleId(null)
  }

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
          <FormInputs register={register} activeCycle={activeCycle} />

          <CountDown
            secondsFormatted={secondsFormatted}
            minutesFormatted={minutesFormatted}
          />

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
