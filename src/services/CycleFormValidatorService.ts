export class CycleFormValidator {
  validate(task: string, minutes: number): boolean {
    if (task.length < 3) {
      console.log('The task description must be at least 3 characters long.')
      return false
    }

    if (minutes < 5) {
      console.log('The task must be at least 5 minutes long.')
      return false
    }

    if (minutes > 60) {
      console.log('The task must be at most 60 minutes long.')
      return false
    }

    if (minutes % 5 !== 0) {
      console.log('The task must be a multiple of 5 minutes long.')
      return false
    }

    return true
  }
}
