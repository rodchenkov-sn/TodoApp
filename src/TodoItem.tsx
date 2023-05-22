export interface TodoItem {
  id: string
  content: string
  done: boolean
}

export function isTodoItem(o: any): o is TodoItem {
  return "id" in o && "content" in o && "done" in o
}
