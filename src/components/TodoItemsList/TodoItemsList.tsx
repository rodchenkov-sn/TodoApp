import { useSelector } from "react-redux"

import { RootState } from "../../state/Store"
import TodoItemCard from "../TodoItemCard"

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
