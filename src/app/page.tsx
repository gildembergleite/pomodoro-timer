import { PiPlayThin } from 'react-icons/pi'

export default function Home() {
  const countStyle = 'text-8xl py-10 px-4 bg-gray-count rounded-lg'
  return (
    <main className="flex w-full h-full text-gray-title">
      <div className="flex flex-col w-full h-full justify-center items-center">
        <form action="">
          <label htmlFor="task">Vou trabalhar em</label>
          <input type="text" name="task" id="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" name="minutesAmount" id="minutesAmount" />

          <span>minutos.</span>

          <div className="flex py-16 gap-4">
            <span className={countStyle}>0</span>
            <span className={countStyle}>0</span>
            <span>:</span>
            <span className={countStyle}>0</span>
            <span className={countStyle}>0</span>
          </div>

          <button
            className="flex w-full justify-center items-center gap-2 py-4 px-10 bg-green-default hover:bg-green-dark rounded-lg"
            type="submit"
          >
            <span className="text-xl">
              <PiPlayThin />
            </span>
            Começar
          </button>
        </form>
      </div>
    </main>
  )
}
