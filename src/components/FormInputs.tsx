import { CyclesContext } from '@/app/page'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

export default function FormInputs() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <div className="flex flex-col text-2xl sm:text-3xl lg:text-lg lg:flex-row w-full items-center gap-2">
      <label htmlFor="task">Vou trabalhar em:</label>
      <input
        className="flex-1 p-2 text-center lg:text-left bg-gray-elements placeholder:text-gray-placeholder border-b-2 border-gray-placeholder focus:border-gray-title focus:outline-none"
        placeholder="nome da atividade"
        list="task-suggestions"
        type="text"
        id="task"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value="Trabalho 1" />
        <option value="Trabalho 2" />
        <option value="Trabalho 3" />
      </datalist>

      <div className="flex items-center gap-2">
        <label htmlFor="minutes">durante</label>
        <input
          className="w-20 p-2 bg-gray-elements border-gray-placeholder focus:border-gray-title border-b-2 focus:outline-none text-center"
          placeholder="00"
          max={60}
          min={1}
          step={5}
          type="number"
          id="minutes"
          disabled={!!activeCycle}
          {...register('minutes', { valueAsNumber: true })}
        />
        <span>minutos.</span>
      </div>
    </div>
  )
}
