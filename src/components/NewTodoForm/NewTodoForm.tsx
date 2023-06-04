import { useRef } from "react"

import { useDispatch } from "react-redux"

import style from "./NewTodoForm.module.scss"

import { addItem } from "@/state/TodoItemsState/Slice"

export default function NewTodoForm() {
  const dispatch = useDispatch()

  const input = useRef<HTMLInputElement>(null)

  return (
    <form
      className={style.newTodoForm}
      onSubmit={e => {
        e.preventDefault()
        if (input.current && input.current.value != "") {
          dispatch(addItem({ content: input.current.value }))
          input.current.value = ""
        }
      }}>
      <input ref={input} />
      <button type="submit">Add</button>
    </form>
  )
}
