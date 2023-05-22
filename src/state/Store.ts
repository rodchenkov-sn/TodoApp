import { configureStore } from "@reduxjs/toolkit"

import newItemContentReducer from "./NewItemContentState/Slice"
import todoItemsReducer from "./TodoItemsState/Slice"

export const store = configureStore({
  reducer: {
    todoItems: todoItemsReducer,
    newItemContent: newItemContentReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
