import { useDispatch } from "react-redux"

import { deleteItem, setItemDone } from "@/state/TodoItemsState/Slice"
import { TodoItem } from "@/TodoItem"

interface TodoItemCardProps {
  item: TodoItem
}

export default function TodoItemCard({ item }: TodoItemCardProps) {
  const dispatch = useDispatch()

  return (
    <div>
      <button
        onClick={() => {
          dispatch(setItemDone({ id: item.id, done: !item.done }))
        }}>
        {item.done ? "Undone" : "Done"}
      </button>

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
