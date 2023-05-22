import { Button, Form } from "react-bulma-components"
import { useDispatch, useSelector } from "react-redux"

import { updateContent } from "../state/NewItemContentState/Slice"
import { RootState } from "../state/Store"
import { addItem } from "../state/TodoItemsState/Slice"

export default function NewTodoForm() {
  const content = useSelector((state: RootState) => state.newItemContent)

  const dispatch = useDispatch()

  return (
    <Form.Field kind="group">
      <Form.Control>
        <Form.Input color="dark" value={content} onChange={e => dispatch(updateContent(e.target.value))} />
      </Form.Control>
      <Form.Control>
        <Button
          color="dark"
          onClick={() => {
            if (content !== "") {
              dispatch(addItem({ content }))
              dispatch(updateContent(""))
            }
          }}>
          Add
        </Button>
      </Form.Control>
    </Form.Field>
  )
}
