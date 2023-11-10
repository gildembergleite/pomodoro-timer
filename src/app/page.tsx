'use client'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Button from '@/components/Button'
import CountDown from '@/components/CountDown'
import FormInputs from '@/components/FormInputs'
import newCycleFormSchema from '@/services/CycleFormSchema'
import { useContext } from 'react'
import { CyclesContext } from '@/context/CyclesContext'

export type NewCycleFormDataProps = z.infer<typeof newCycleFormSchema>

export default function Home() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormDataProps>({
    resolver: zodResolver(newCycleFormSchema),
  })

  const { handleSubmit, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormDataProps) {
    createNewCycle(data)
    reset()
  }

  return (
    <main className="flex w-full h-[calc(100vh-94px)] lg:h-full text-gray-title py-10 lg:py-0">
      <section className="flex flex-col w-full h-full justify-center items-center">
        <form
          onSubmit={handleSubmit(handleCreateNewCycle)}
          className="font-bold"
        >
          <FormProvider {...newCycleForm}>
            <FormInputs />
          </FormProvider>
          <CountDown />
          <Button
            onInterruptCycle={interruptCurrentCycle}
            started={!!activeCycle}
          />
        </form>
      </section>
    </main>
  )
}
