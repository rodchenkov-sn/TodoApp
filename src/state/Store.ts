import { AnyAction, ThunkDispatch, configureStore } from "@reduxjs/toolkit"

import newItemContentReducer from "./NewItemContentState/Slice"
import { saveItemsToLocalStore, loadItemsFromLocalStore } from "./TodoItemsState/Middleware"
import { todoItemsReducer, TodoItemsState } from "./TodoItemsState/Slice"

export const store = configureStore({
  preloadedState: {
    todoItems: { items: loadItemsFromLocalStore() },
    newItemContent: "",
  },
  reducer: {
    todoItems: todoItemsReducer,
    newItemContent: newItemContentReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(saveItemsToLocalStore.middleware),
})

export type RootState = { todoItems: TodoItemsState; newItemContent: string }

export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>
