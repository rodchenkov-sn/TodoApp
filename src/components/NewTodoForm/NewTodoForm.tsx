import { useDispatch, useSelector } from "react-redux"

import { updateContent } from "@/state/NewItemContentState/Slice"
import { RootState } from "@/state/Store"
import { addItem } from "@/state/TodoItemsState/Slice"

export default function NewTodoForm() {
  const content = useSelector((state: RootState) => state.newItemContent)

  const dispatch = useDispatch()

  return (
    <>
      <input color="dark" value={content} onChange={e => dispatch(updateContent(e.target.value))} />
      <button
        onClick={() => {
          if (content !== "") {
            dispatch(addItem({ content }))
            dispatch(updateContent(""))
          }
        }}>
        Add
      </button>
    </>
  )
}
