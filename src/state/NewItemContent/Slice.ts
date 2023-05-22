import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export const newItemContentSlice = createSlice({
  name: "newItemContent",
  initialState: "",
  reducers: {
    updateContent: (_state, { payload }: PayloadAction<string>) => payload,
  },
})

export const { updateContent } = newItemContentSlice.actions

export default newItemContentSlice.reducer
