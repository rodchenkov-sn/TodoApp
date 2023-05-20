import { useState } from "react"

import { Button, Form } from "react-bulma-components"

import TodoItem from "./TodoItem"

interface NewTodoFormProps {
  setItemsCB: React.Dispatch<React.SetStateAction<TodoItem[]>>
}

export default function NewTodoForm(props: NewTodoFormProps) {
  const [content, setContent] = useState("")

  function addItem(content: string) {
    if (content === "") {
      return
    }

    props.setItemsCB(current => {
      return [...current, { id: crypto.randomUUID(), content: content, done: false }]
    })

    setContent("")
  }

  return (
    <Form.Field kind="group">
      <Form.Control>
        <Form.Input color="dark" value={content} onChange={e => setContent(e.target.value)} />
      </Form.Control>
      <Form.Control>
        <Button color="dark" onClick={() => addItem(content)}>
          Add
        </Button>
      </Form.Control>
    </Form.Field>
  )
}
