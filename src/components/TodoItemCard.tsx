import { Button, Card } from "react-bulma-components"

import DoneButton from "./DoneButton"
import TodoItem from "../TodoItem"

interface TodoItemCardProps {
  item: TodoItem
  setItemsCB: React.Dispatch<React.SetStateAction<TodoItem[]>>
}

export default function TodoItemCard({ item, setItemsCB }: TodoItemCardProps) {
  return (
    <Card>
      <Card.Header textAlign={"center"}>
        <Card.Header.Title>
          <DoneButton
            done={item.done}
            onClicked={() =>
              setItemsCB(currItems => currItems.map(i => (i.id === item.id ? { ...i, done: !i.done } : i)))
            }
          />

          <Card.Header.Title>{item.done ? <del>{item.content}</del> : item.content}</Card.Header.Title>

          <Button color={"danger"} onClick={() => setItemsCB(currItems => currItems.filter(i => i.id !== item.id))}>
            Delete
          </Button>
        </Card.Header.Title>
      </Card.Header>
    </Card>
  )
}
