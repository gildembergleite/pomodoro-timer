export default function History() {
  const tdStyle =
    'py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell'
  return (
    <main className="flex flex-col w-full h-full text-gray-title px-4 sm:px-8 md:px-12 lg:px-24 pb-10 lg:pb-0 leading-6">
      <h1 className="text-2xl font-bold pt-12">Meu Histórico</h1>
      <section className="w-full overflow-x-auto pt-8">
        <table className="min-w-full lg:h-3/4 lg:rounded-t-lg rounded-lg overflow-hidden">
          <thead className="hidden lg:flex bg-gray-divider border-b-4 border-gray-elements whitespace-nowrap">
            <tr className="lg:w-full lg:table text-left font-bold">
              <th className="py-4 px-6 w-1/2">Tarefa</th>
              <th className="py-4 px-6">Duração</th>
              <th className="py-4 px-6">Início</th>
              <th className="py-4 px-6">Status</th>
            </tr>
          </thead>
          <tbody className="lg:block divide-y-4 divide-gray-elements max-h-[416px] overflow-auto whitespace-nowrap">
            <tr className="flex flex-col lg:divide-y-0 lg:w-full lg:table bg-gray-count text-left divide-y-2 divide-gray-divider">
              <td data-label="Tarefa" className={`${tdStyle} lg:w-1/2`}>
                Exemplo de tarefa executada
              </td>
              <td data-label="Duração" className={`${tdStyle}`}>
                25 minutos
              </td>
              <td data-label="Início" className={`${tdStyle}`}>
                Há 07 dias
              </td>
              <td data-label="Status" className={`${tdStyle}`}>
                Concluído
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  )
}
