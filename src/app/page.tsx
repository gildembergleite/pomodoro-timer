'use client'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { createContext, useState } from 'react'
import Button from '@/components/Button'
import CountDown from '@/components/CountDown'
import FormInputs from '@/components/FormInputs'
import newCycleFormSchema from '@/services/CycleFormSchema'

export type NewCycleFormDataProps = z.infer<typeof newCycleFormSchema>

interface CycleProps {
  id: string
  task: string
  minutes: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextProps {
  activeCycle: CycleProps | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished: Function
  amountSecondsPassed: number
}

export const CyclesContext = createContext({} as CyclesContextProps)

export default function Home() {
  const [cycles, setCycles] = useState<CycleProps[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function markCurrentCycleAsFinished(
    isCycleFinished: boolean,
    seconds: number,
  ) {
    if (isCycleFinished) {
      setCycles((state) =>
        state.map((cycle) => {
          if (cycle.id !== activeCycleId) {
            return { ...cycle, finishedDate: new Date() }
          } else {
            return cycle
          }
        }),
      )
      setActiveCycleId(null)
      setAmountSecondsPassed(seconds)
    } else {
      setAmountSecondsPassed(seconds)
    }
  }

  const newCycleForm = useForm<NewCycleFormDataProps>({
    resolver: zodResolver(newCycleFormSchema),
  })

  const { handleSubmit, reset } = newCycleForm

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

  return (
    <main className="flex w-full h-[calc(100vh-94px)] lg:h-full text-gray-title py-10 lg:py-0">
      <section className="flex flex-col w-full h-full justify-center items-center">
        <CyclesContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            markCurrentCycleAsFinished,
            amountSecondsPassed,
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="font-bold">
            <FormProvider {...newCycleForm}>
              <FormInputs />
            </FormProvider>
            <CountDown />
            <Button onInterruptCycle={interruptCycle} started={!!activeCycle} />
          </form>
        </CyclesContext.Provider>
      </section>
    </main>
  )
}
