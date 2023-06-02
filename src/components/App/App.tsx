import Header from "@/components/Header"
import NewTodoForm from "@/components/NewTodoForm"
import TodoItemsList from "@/components/TodoItemsList"

import "./App.css"

export default function App() {
  return (
    <>
      <Header />
      <NewTodoForm />
      <TodoItemsList />
    </>
  )
}
