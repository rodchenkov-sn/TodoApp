import { useDispatch } from "react-redux"

import DoneButton from "./DoneButton"
import { deleteItem, setItemDone } from "../state/TodoItemsState/Slice"
import { TodoItem } from "../TodoItem"

interface TodoItemCardProps {
  item: TodoItem
}

export default function TodoItemCard({ item }: TodoItemCardProps) {
  const dispatch = useDispatch()

  return (
    <div>
      <DoneButton
        done={item.done}
        onClicked={() => {
          dispatch(setItemDone({ id: item.id, done: !item.done }))
        }}
      />

      {item.done ? <del>{item.content}</del> : item.content}

      <button
        onClick={() => {
          dispatch(deleteItem({ id: item.id }))
        }}>
        Delete
      </button>
    </div>
  )
}
