import { Cycle } from '@/@types/Cycle'

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export default function cycleReducer(state: CyclesState, action: any) {
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
      cycles: [
        ...state.cycles,
        getCycleById(state.cycles, state.activeCycleId),
      ],
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
}

function getCycleById(cycles: Cycle[], activeCycleId: string | null) {
  cycles.map((cycle) => {
    if (cycle.id === activeCycleId) {
      return { ...cycle, interruptedDate: new Date() }
    } else {
      return cycle
    }
  })
}
