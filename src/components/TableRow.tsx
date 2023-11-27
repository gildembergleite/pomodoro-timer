import { Cycle } from '@/@types/Cycle'

interface TableRowProps {
  cycle: Cycle
}

export default function TableRow({ cycle }: TableRowProps) {
  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date(cycle.startDate))

  const statusColor = cycle.finishedDate
    ? 'bg-green-500'
    : cycle.interruptedDate
    ? 'bg-red-500'
    : 'bg-amber-500'

  return (
    <tr className="lg:divide-y-0 bg-gray-count text-left divide-y-2 divide-gray-divider rounded-lg lg:rounded-none">
      <th
        scope="row"
        data-label="Tarefa"
        className={`lg:max-w-[280px] truncate py-4 px-6 block text-right before:pr-12 before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell`}
      >
        {cycle.task}
      </th>
      <td
        data-label="Duração"
        className={`py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell`}
      >
        {cycle.minutes} {'minuto(s)'}
      </td>
      <td
        data-label="Início"
        className={`py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell`}
      >
        {formattedDate}
      </td>
      <td
        data-label="Status"
        className={`py-4 px-6 block text-right before:float-left before:content-[attr(data-label)] before:font-bold lg:before:content-none lg:before:float-none lg:text-left lg:table-cell`}
      >
        <span
          className={`${statusColor} inline-block w-2 h-2 mr-2 mb-[2px] rounded-full`}
        ></span>
        {cycle.interruptedDate
          ? 'Interrompido'
          : cycle.finishedDate
          ? 'Concluído'
          : 'Em andamento'}
      </td>
    </tr>
  )
}
