export default function TableRow() {
  return (
    <tr className="lg:divide-y-0 bg-gray-count text-left divide-y-2 divide-gray-divider rounded-lg lg:rounded-none">
      <th
        scope="row"
        data-label="Tarefa"
        className={`py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell`}
      >
        Exemplo de tarefa executada
      </th>
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
  )
}
