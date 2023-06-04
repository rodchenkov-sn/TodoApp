import { useDispatch, useSelector } from "react-redux"

import style from "./NewTodoForm.module.scss"

import { updateContent } from "@/state/NewItemContentState/Slice"
import { RootState } from "@/state/Store"
import { addItem } from "@/state/TodoItemsState/Slice"

export default function NewTodoForm() {
  const content = useSelector((state: RootState) => state.newItemContent)

  const dispatch = useDispatch()

  return (
    <form
      className={style.newTodoForm}
      onSubmit={e => {
        e.preventDefault()
        if (content !== "") {
          dispatch(addItem({ content }))
          dispatch(updateContent(""))
        }
      }}>
      <input color="dark" value={content} onChange={e => dispatch(updateContent(e.target.value))} />
      <button type="submit">Add</button>
    </form>
  )
}
