import { Button, Card } from "react-bulma-components"
import { useDispatch } from "react-redux"

import DoneButton from "./DoneButton"
import { deleteItem, setItemDone } from "../state/TodoItemsState/Slice"
import TodoItem from "../TodoItem"

interface TodoItemCardProps {
  item: TodoItem
}

export default function TodoItemCard({ item }: TodoItemCardProps) {
  const dispatch = useDispatch()

  return (
    <Card>
      <Card.Header textAlign={"center"}>
        <Card.Header.Title>
          <DoneButton
            done={item.done}
            onClicked={() => {
              dispatch(setItemDone({ id: item.id, done: !item.done }))
            }}
          />

          <Card.Header.Title>{item.done ? <del>{item.content}</del> : item.content}</Card.Header.Title>

          <Button
            color={"danger"}
            onClick={() => {
              dispatch(deleteItem({ id: item.id }))
            }}>
            Delete
          </Button>
        </Card.Header.Title>
      </Card.Header>
    </Card>
  )
}
