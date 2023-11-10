'use client'
import { ReactNode, createContext, useState } from 'react'

interface CycleFormDataProps {
  task: string
  minutes: number
}

export interface CycleProps {
  id: string
  task: string
  minutes: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextProps {
  cycles: CycleProps[]
  activeCycle: CycleProps | undefined
  amountSecondsPassed: number
  activeCycleId: string | null
  markCurrentCycleAsFinished: (
    isCycleFinished: boolean,
    seconds: number,
  ) => void
  interruptCurrentCycle: () => void
  createNewCycle: (data: CycleFormDataProps) => void
}

export const CyclesContext = createContext({} as CyclesContextProps)

export function CyclesContextProvider({ children }: { children: ReactNode }) {
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

  function createNewCycle(data: CycleFormDataProps) {
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
  }

  function interruptCurrentCycle() {
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
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        interruptCurrentCycle,
        createNewCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
