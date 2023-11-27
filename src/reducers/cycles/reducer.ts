import { Cycle } from '@/@types/Cycle'
import { ActionType } from './actions'

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export default function cycleReducer(state: CyclesState, action: any) {
  if (action.type === ActionType.ADD_NEW_CYCLE) {
    return {
      ...state,
      cycles: [...state.cycles, action.payload.newCycle],
      activeCycleId: action.payload.newCycle.id,
    }
  }

  if (action.type === ActionType.INTERRUPT_CURRENT_CYCLE) {
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

  if (action.type === ActionType.MARK_CURRENT_CYCLE_AS_FINISHED) {
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
}
