import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../interfaces'

export interface ProductState {
  value: IProduct[]
}

const initialState: ProductState = {
  value: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProducts} = productSlice.actions

export default productSlice.reducer