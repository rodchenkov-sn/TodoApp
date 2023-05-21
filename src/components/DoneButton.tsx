import { Button } from "react-bulma-components"

interface DoneButtonProps {
  done: boolean
  onClicked: () => void
}

export default function DoneButton({ done, onClicked }: DoneButtonProps) {
  return (
    <Button color={done ? "dark" : "success"} onClick={onClicked}>
      {done ? "Undone" : "Done"}
    </Button>
  )
}
