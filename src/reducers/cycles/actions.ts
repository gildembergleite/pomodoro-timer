import { ActionType } from '@/@types/Actions'
import { Cycle } from '@/@types/Cycle'

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionType.ADD_NEW_CYCLE,
    payload: { newCycle },
  }
}

export function interruptCurrentCycleAction() {
  return { type: ActionType.INTERRUPT_CURRENT_CYCLE }
}

export function markCurrentCycleAsFinishedAction() {
  return { type: ActionType.MARK_CURRENT_CYCLE_AS_FINISHED }
}
