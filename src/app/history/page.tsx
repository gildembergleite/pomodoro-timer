'use client'
import TableRow from '@/components/TableRow'
import { CyclesContext } from '@/context/CyclesContext'
import { useContext } from 'react'

export default function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <main className="flex flex-col w-full h-full text-gray-title px-4 sm:px-8 md:px-12 lg:px-24 pb-10 lg:pb-0 leading-6">
      <h1 className="text-2xl font-bold pt-12">Meu Histórico</h1>
      <section className="lg:max-h-[476px] overflow-y-auto mt-8">
        <table className="table-fixed min-w-full lg:h-3/4 lg:rounded-t-lg overflow-hidden">
          <thead className="hidden lg:table-header-group bg-gray-divider border-b-4 border-gray-elements whitespace-nowrap">
            <tr className="text-left font-bold">
              <th scope="col" className="py-4 px-6">
                Tarefa
              </th>
              <th scope="col" className="py-4 px-6">
                Duração
              </th>
              <th scope="col" className="py-4 px-6">
                Início
              </th>
              <th scope="col" className="py-4 px-6">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="flex flex-col lg:table-row-group divide-y-4 divide-gray-elements whitespace-nowrap gap-4">
            {cycles.map((cycle) => (
              <TableRow key={cycle.id} cycle={cycle} />
            ))}
          </tbody>
        </table>
      </section>
    </main>
  )
}
