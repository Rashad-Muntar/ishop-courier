import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  order: {}
}
const orderSlice = createSlice({
  name: 'locationstoreDetail',
  initialState: initialState,
  reducers: {
    setOrder: (state, action) => {
      return { ...state, order: action.payload.order }
    },
  },
})

export const { setOrder } = orderSlice.actions
export const orderReducer = orderSlice.reducer
