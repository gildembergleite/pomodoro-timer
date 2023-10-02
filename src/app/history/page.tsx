export default function History() {
  return (
    <main className="flex flex-col w-full h-full text-gray-title px-4 sm:px-8 md:px-12 lg:px-24 pb-10 lg:pb-0 leading-6">
      <h1 className="text-2xl font-bold pt-12">Meu Histórico</h1>
      <section className="block max-h-60 w-full pt-8">
        <table className="table table-fixed min-w-full lg:h-3/4 lg:rounded-t-lg overflow-hidden">
          <thead className="hidden lg:table-header-group bg-gray-divider border-b-4 border-gray-elements whitespace-nowrap">
            <tr className="text-left font-bold">
              <th scope="col" className="py-4 px-6 w-1/2">
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
          <tbody className="divide-y-4 divide-gray-elements overflow-y-auto whitespace-nowrap">
            <tr className="lg:divide-y-0 bg-gray-count text-left divide-y-2 divide-gray-divider rounded-lg lg:rounded-none">
              <td
                data-label="Tarefa"
                className={`py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell lg:w-1/2`}
              >
                Exemplo de tarefa executada
              </td>
              <td
                data-label="Duração"
                className={`py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell`}
              >
                25 minutos
              </td>
              <td
                data-label="Início"
                className={`py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell`}
              >
                Há cerca de 07 dias
              </td>
              <td
                data-label="Status"
                className={`py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell`}
              >
                <span className="inline-block w-2 h-2 mr-2 mb-[2px] rounded-full bg-green-500"></span>
                Concluído
              </td>
            </tr>
            <tr className="lg:divide-y-0 bg-gray-count text-left divide-y-2 divide-gray-divider">
              <td
                data-label="Tarefa"
                className={`py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell lg:w-1/2`}
              >
                Exemplo de tarefa executada
              </td>
              <td
                data-label="Duração"
                className={`py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell`}
              >
                25 minutos
              </td>
              <td
                data-label="Início"
                className={`py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell`}
              >
                Há cerca de 07 dias
              </td>
              <td
                data-label="Status"
                className={`py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell`}
              >
                <span className="inline-block w-2 h-2 mr-2 mb-[2px] rounded-full bg-green-500"></span>
                Concluído
              </td>
            </tr>
            <tr className="lg:divide-y-0 bg-gray-count text-left divide-y-2 divide-gray-divider">
              <td
                data-label="Tarefa"
                className={`py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell lg:w-1/2`}
              >
                Exemplo de tarefa executada
              </td>
              <td
                data-label="Duração"
                className={`py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell`}
              >
                25 minutos
              </td>
              <td
                data-label="Início"
                className={`py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell`}
              >
                Há cerca de 07 dias
              </td>
              <td
                data-label="Status"
                className={`py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell`}
              >
                <span className="inline-block w-2 h-2 mr-2 mb-[2px] rounded-full bg-green-500"></span>
                Concluído
              </td>
            </tr>
            <tr className="lg:divide-y-0 bg-gray-count text-left divide-y-2 divide-gray-divider">
              <td
                data-label="Tarefa"
                className={`py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell lg:w-1/2`}
              >
                Exemplo de tarefa executada
              </td>
              <td
                data-label="Duração"
                className={`py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell`}
              >
                25 minutos
              </td>
              <td
                data-label="Início"
                className={`py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell`}
              >
                Há cerca de 07 dias
              </td>
              <td
                data-label="Status"
                className={`py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell`}
              >
                <span className="inline-block w-2 h-2 mr-2 mb-[2px] rounded-full bg-green-500"></span>
                Concluído
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  )
}
