import "bulma/css/bulma.min.css"
import { useEffect, useState } from "react"

import { Section, Hero, Container, Heading } from "react-bulma-components"

import NewTodoForm from "./NewTodoForm"
import TodoItem from "./TodoItem"
import TodoItemCard from "./TodoItemCard"

export default function App() {
  const [items, setItems] = useState<TodoItem[]>(() => {
    const savedItems = localStorage.getItem("ITEMS")
    if (!savedItems) {
      return []
    }
    return JSON.parse(savedItems)
  })

  useEffect(() => localStorage.setItem("ITEMS", JSON.stringify(items)), [items])

  return (
    <>
      <Hero color={"dark"}>
        <Hero.Body>
          <Container>
            <Heading>TODO List</Heading>
          </Container>
        </Hero.Body>
      </Hero>
      <Section>
        <NewTodoForm setItemsCB={setItems} />
      </Section>

      {items
        .sort((a, b) => {
          if (a.done === b.done) {
            return 0
          }
          return a.done ? 1 : -1
        })
        .map(e => (
          <TodoItemCard key={e.id} item={e} setItemsCB={setItems} />
        ))}
    </>
  )
}
