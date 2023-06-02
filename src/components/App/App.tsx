import Header from "../Header"
import NewTodoForm from "../NewTodoForm"
import TodoItemsList from "../TodoItemsList"

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
