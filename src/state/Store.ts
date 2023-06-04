import { AnyAction, ThunkDispatch, configureStore } from "@reduxjs/toolkit"

import { saveItemsToLocalStore, loadItemsFromLocalStore } from "./TodoItemsState/Middleware"
import { todoItemsReducer, TodoItemsState } from "./TodoItemsState/Slice"

export const store = configureStore({
  preloadedState: {
    todoItems: { items: loadItemsFromLocalStore() },
  },
  reducer: {
    todoItems: todoItemsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(saveItemsToLocalStore.middleware),
})

export type RootState = { todoItems: TodoItemsState }

export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>
