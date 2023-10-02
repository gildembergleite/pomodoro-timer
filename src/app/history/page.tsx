export default function History() {
  return (
    <main className="flex flex-col w-full h-full text-gray-title px-4 sm:px-8 md:px-12 lg:px-24 leading-6">
      <h1 className="text-2xl font-bold pt-12">Meu Histórico</h1>
      <section className="pt-8 overflow-x-auto">
        <table className="w-full h-3/4 rounded-t-lg overflow-hidden">
          <thead className="bg-gray-divider border-b-4 border-gray-elements">
            <tr className="text-left font-bold">
              <th className="py-4 px-6 first:w-1/2">Tarefa</th>
              <th className="py-4 px-6">Duração</th>
              <th className="py-4 px-6">Início</th>
              <th className="py-4 px-6">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y-4 divide-gray-elements">
            <tr className="bg-gray-count text-left">
              <td className="py-4 px-6">Exemplo de tarefa executada</td>
              <td className="py-4 px-6">25 minutos</td>
              <td className="py-4 px-6">Há 07 dias</td>
              <td className="py-4 px-6">Concluído</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  )
}
