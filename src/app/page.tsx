'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { createContext, useState } from 'react'
import Button from '@/components/Button'
import CountDown from '@/components/CountDown'
import FormInputs from '@/components/FormInputs'
import newCycleFormSchema from '@/services/CycleFormSchema'

type NewCycleFormDataProps = z.infer<typeof newCycleFormSchema>

interface CycleProps {
  id: string
  task: string
  minutes: number
  startDate: Date
  interruptedDate?: Date
  finshedDate?: Date
}

interface CyclesContextProps {
  activeCycle: CycleProps | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished: Function
}

export const CyclesContext = createContext({} as CyclesContextProps)

export default function Home() {
  const [cycles, setCycles] = useState<CycleProps[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id !== activeCycleId) {
          return { ...cycle, finshedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
  }

  const { register, handleSubmit, reset } = useForm<NewCycleFormDataProps>({
    resolver: zodResolver(newCycleFormSchema),
  })

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

  return (
    <main className="flex w-full h-[calc(100vh-94px)] lg:h-full text-gray-title py-10 lg:py-0">
      <section className="flex flex-col w-full h-full justify-center items-center">
        <CyclesContext.Provider
          value={{ activeCycle, activeCycleId, markCurrentCycleAsFinished }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="font-bold"
            action=""
          >
            <FormInputs register={register} activeCycle={activeCycle} />

            <CountDown />

            <Button onInterruptCycle={interruptCycle} started={!!activeCycle} />
          </form>
        </CyclesContext.Provider>
      </section>
    </main>
  )
}
