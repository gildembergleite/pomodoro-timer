'use client'
import { ReactNode, createContext, useReducer, useState } from 'react'

interface CycleFormData {
  task: string
  minutes: number
}

export interface Cycle {
  id: string
  task: string
  minutes: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CycleContext {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  amountSecondsPassed: number
  activeCycleId: string | null
  setAmountSecondsPassed: (seconds: number) => void
  markCurrentCycleAsFinished: () => void
  interruptCurrentCycle: () => void
  createNewCycle: (data: CycleFormData) => void
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export const CyclesContext = createContext({} as CycleContext)

export function CyclesContextProvider({ children }: { children: ReactNode }) {
  const [cyclesState, dispatch] = useReducer(
    (state: CyclesState, action: any) => {
      if (action.type === 'ADD_NEW_CYCLE') {
        return {
          ...state,
          cycles: [...state.cycles, action.payload.newCycle],
          activeCycleId: action.payload.newCycle.id,
        }
      }
      if (action.type === 'INTERRUPT_CURRENT_CYCLE') {
        return {
          ...state,
          cycles: state.cycles.map((cycle) => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, interruptedDate: new Date() }
            } else {
              return cycle
            }
          }),
          activeCycleId: null,
        }
      }
      if (action.type === 'MARK_CURRENT_CYCLE_AS_FINISHED') {
        return {
          ...state,
          cycles: state.cycles.map((cycle) => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, finishedDate: new Date() }
            } else {
              return cycle
            }
          }),
          activeCycleId: null,
        }
      }
      return state
    },
    {
      cycles: [],
      activeCycleId: null,
    },
  )
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function createNewCycle(data: CycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutes: data.minutes,
      startDate: new Date(),
    }

    dispatch({ type: 'ADD_NEW_CYCLE', payload: { newCycle } })
    setAmountSecondsPassed(0)
  }

  function interruptCurrentCycle() {
    dispatch({ type: 'INTERRUPT_CURRENT_CYCLE', payload: { activeCycleId } })
    document.title = `Pomodoro Timer`
  }

  function markCurrentCycleAsFinished() {
    dispatch({
      type: 'MARK_CURRENT_CYCLE_AS_FINISHED',
      payload: { activeCycleId },
    })
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        setAmountSecondsPassed,
        markCurrentCycleAsFinished,
        interruptCurrentCycle,
        createNewCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
