import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICart } from '../../interfaces'

export interface CartState {
  value: ICart[]
}

const initialState: CartState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICart>) => {
      state.value.push(action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem} = cartSlice.actions

export default cartSlice.reducer