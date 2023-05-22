import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit"

import { addItem, deleteItem, setItemDone } from "./Slice"
import { TodoItem, isTodoItem } from "../../TodoItem"
import { AppDispatch, RootState } from "../Store"

export function loadItemsFromLocalStore(): TodoItem[] {
  const itemsStr = localStorage.getItem("ITEMS")
  if (!itemsStr) {
    return []
  }
  const items = JSON.parse(itemsStr)
  const isTodoItemsArray = Array.isArray(items) && items.every(i => isTodoItem(i))
  if (isTodoItemsArray) {
    return items
  }
  localStorage.removeItem("ITEMS")
  return []
}

export const saveItemsToLocalStore = createListenerMiddleware<RootState, AppDispatch>()
saveItemsToLocalStore.startListening({
  matcher: isAnyOf(addItem, deleteItem, setItemDone),
  effect: (_action, api) => {
    localStorage.setItem("ITEMS", JSON.stringify(api.getState().todoItems.items))
  },
})
