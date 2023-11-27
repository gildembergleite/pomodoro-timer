import { Cycle } from './Cycle'
import { CycleFormData } from './CycleFormData'

export interface CycleContext {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  amountSecondsPassed: number
  activeCycleId: string | null
  setAmountSecondsPassed: (seconds: number) => void
  markCurrentCycleAsFinished: () => void
  interruptCurrentCycle: () => void
  createNewCycle: (data: CycleFormData) => void
}
