interface DoneButtonProps {
  done: boolean
  onClicked: () => void
}

export default function DoneButton({ done, onClicked }: DoneButtonProps) {
  return <button onClick={onClicked}>{done ? "Undone" : "Done"}</button>
}
