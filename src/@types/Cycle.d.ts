export interface Cycle {
  id: string
  task: string
  minutes: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}
