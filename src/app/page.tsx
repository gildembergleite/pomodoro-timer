// eslint-disable-next-line camelcase
import { Roboto_Mono } from 'next/font/google'
import { PiPlayFill } from 'react-icons/pi'

const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['700'] })

export default function Home() {
  const countStyle = 'text-[10rem] px-4 py-6 rounded-lg leading-none'
  return (
    <main className="flex w-full h-full text-gray-title">
      <section className="flex flex-col w-full h-full justify-center items-center">
        <form className="font-bold" action="">
          <div className="flex w-full items-center gap-2">
            <label className="text-lg" htmlFor="task">
              Vou trabalhar em
            </label>
            <input
              className="flex-1 p-2 text-lg bg-gray-elements placeholder:text-gray-placeholder border-b-2 border-gray-placeholder focus:border-gray-title focus:outline-none"
              placeholder="nome para o seu projeto"
              list="task-suggestions"
              type="text"
              name="task"
              id="task"
            />
            <datalist id="task-suggestions">
              <option value="Trabalho 1" />
              <option value="Trabalho 2" />
              <option value="Trabalho 3" />
            </datalist>

            <label className="text-lg" htmlFor="minutesAmount">
              durante
            </label>
            <input
              className="w-20 p-2 text-lg bg-gray-elements border-gray-placeholder focus:border-gray-title border-b-2 focus:outline-none text-center"
              placeholder="00"
              max={60}
              min={5}
              step={5}
              type="number"
              name="minutesAmount"
              id="minutesAmount"
            />

            <span>minutos.</span>
          </div>

          <div className={`${robotoMono.className} flex py-16 gap-4`}>
            <span className={`${countStyle} bg-gray-count`}>0</span>
            <span className={`${countStyle} bg-gray-count`}>0</span>
            <span className={`${countStyle} text-green-default`}>:</span>
            <span className={`${countStyle} bg-gray-count`}>0</span>
            <span className={`${countStyle} bg-gray-count`}>0</span>
          </div>

          <button
            className="flex w-full justify-center items-center gap-2 py-4 px-10 bg-green-default hover:bg-green-dark rounded-lg disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:bg-green-default"
            type="submit"
            disabled
          >
            <span className="text-xl">
              <PiPlayFill />
            </span>
            Começar
          </button>
        </form>
      </section>
    </main>
  )
}
