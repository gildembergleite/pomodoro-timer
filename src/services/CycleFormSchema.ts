import { z } from 'zod'

const newCycleFormSchema = z.object({
  task: z
    .string()
    .min(3, 'A descrição da tarefa deve ter no mínimo 3 caracteres'),
  minutes: z
    .number()
    .min(1, 'O ciclo deve ter no mínimo 05 minutos')
    .max(60, 'O ciclo deve ter no máximo 60 minutos'),
})

export default newCycleFormSchema
