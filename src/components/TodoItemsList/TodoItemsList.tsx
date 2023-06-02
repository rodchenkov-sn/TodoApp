import { useSelector } from "react-redux"

import TodoItemCard from "@/components/TodoItemCard"
import { RootState } from "@/state/Store"

export default function TodoItemsList() {
  const items = useSelector((state: RootState) => state.todoItems.items)

  return (
    <>
      {items
        .filter(i => !i.done)
        .map(i => (
          <TodoItemCard key={i.id} item={i} />
        ))}

      {items
        .filter(i => i.done)
        .map(i => (
          <TodoItemCard key={i.id} item={i} />
        ))}
    </>
  )
}
