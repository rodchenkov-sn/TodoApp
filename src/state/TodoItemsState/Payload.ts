export interface AddItemActionPayload {
  content: string
}

export interface DeleteItemActionPayload {
  id: string
}

export interface SetItemDoneActionPayload {
  id: string
  done: boolean
}
