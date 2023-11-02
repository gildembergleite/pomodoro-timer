import { PiPlayFill, PiStop } from 'react-icons/pi'

interface ButtonProps {
  started: boolean
  disabled: boolean
}

export default function Button({ started, disabled }: ButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled && !started}
      className={`
        flex w-full justify-center items-center gap-2 py-4 px-10 rounded-lg 
        disabled:opacity-75 disabled:cursor-not-allowed
      ${
        started
          ? 'bg-red-default disabled:hover:bg-red-default hover:bg-red-dark'
          : 'bg-green-default disabled:hover:bg-green-default hover:bg-green-dark'
      }`}
    >
      <span className="text-xl">{started ? <PiStop /> : <PiPlayFill />}</span>
      {started ? 'Interromper' : 'Começar'}
    </button>
  )
}
