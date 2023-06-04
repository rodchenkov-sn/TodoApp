import Header from "./Header"
import NewTodoForm from "./NewTodoForm"
import TodoItemsList from "./TodoItemsList"

import "@/styles/Common.scss"

export default function App() {
  return (
    <>
      <Header />
      <NewTodoForm />
      <TodoItemsList />
    </>
  )
}
