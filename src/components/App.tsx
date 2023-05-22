import "bulma/css/bulma.min.css"

import { Section, Hero, Container, Heading } from "react-bulma-components"
import { useSelector } from "react-redux"

import NewTodoForm from "./NewTodoForm"
import TodoItemCard from "./TodoItemCard"
import { RootState } from "../state/Store"

export default function App() {
  const items = useSelector((state: RootState) => state.todoItems.items)

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
        <NewTodoForm />
      </Section>

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
