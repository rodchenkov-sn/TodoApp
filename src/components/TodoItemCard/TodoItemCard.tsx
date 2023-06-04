import { useDispatch } from "react-redux"

import style from "./TodoItemCard.module.scss"

import { deleteItem, setItemDone } from "@/state/TodoItemsState/Slice"
import { TodoItem } from "@/TodoItem"

interface TodoItemCardProps {
  item: TodoItem
}

export default function TodoItemCard({ item }: TodoItemCardProps) {
  const dispatch = useDispatch()

  return (
    <div className={style.itemCard}>
      <button
        className={!item.done ? style.doneButton : style.undoneButton}
        onClick={() => {
          dispatch(setItemDone({ id: item.id, done: !item.done }))
        }}>
        {item.done ? "Undone" : "Done"}
      </button>

      <div className={item.done ? style.itemContentDone : style.itemContentNotDone}>{item.content}</div>

      <button
        className={style.deleteButton}
        onClick={() => {
          dispatch(deleteItem({ id: item.id }))
        }}>
        Delete
      </button>
    </div>
  )
}
