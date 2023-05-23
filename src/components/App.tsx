import { useSelector } from "react-redux"

import NewTodoForm from "./NewTodoForm"
import TodoItemCard from "./TodoItemCard"
import { RootState } from "../state/Store"

export default function App() {
  const items = useSelector((state: RootState) => state.todoItems.items)

  return (
    <>
      <h1>TODO List</h1>
      <NewTodoForm />

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
