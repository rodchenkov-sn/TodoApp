import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { AddItemActionPayload, DeleteItemActionPayload, SetItemDoneActionPayload } from "./Payload"
import TodoItem from "../../TodoItem"

export interface TodoItemsState {
  items: TodoItem[]
}

export const todoItemsSlice = createSlice({
  name: "todoItems",
  initialState: { items: [] } as TodoItemsState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<AddItemActionPayload>) => {
      state.items.push({ id: crypto.randomUUID(), content: payload.content, done: false })
    },
    deleteItem: (state, { payload }: PayloadAction<DeleteItemActionPayload>) => {
      state.items = state.items.filter(i => i.id != payload.id)
    },
    setItemDone: (state, { payload }: PayloadAction<SetItemDoneActionPayload>) => {
      state.items = state.items.map(i => (i.id == payload.id ? { ...i, done: payload.done } : i))
    },
  },
})

export const { addItem, deleteItem, setItemDone } = todoItemsSlice.actions

export default todoItemsSlice.reducer
