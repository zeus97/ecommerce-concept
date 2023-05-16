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
      const a = state.value.find((item)=> item.id === action.payload.id);
      if(a === undefined){
        state.value.push(action.payload)

      }else{
        const index = state.value.findIndex((item)=> item.id === action.payload.id);
        state.value[index].quantity = state.value[index].quantity + 1;
        
      }
      
    },
    removeItem: (state, action: PayloadAction<number> )=>{
      state.value = state.value.filter((item)=> item.id !== action.payload);  
    },
    increment: (state, action: PayloadAction<number>)=>{
      const index = state.value.findIndex((item)=> item.id === action.payload);
      state.value[index].quantity = state.value[index].quantity + 1;
    },
    decrement: (state, action: PayloadAction<number>)=>{
      const index = state.value.findIndex((item)=> item.id === action.payload);
      if (state.value[index].quantity > 1){
        state.value[index].quantity = state.value[index].quantity - 1;
      }
    },

  },
})

// Action creators are generated for each case reducer function
export const { addItem,removeItem, increment, decrement } = cartSlice.actions

export default cartSlice.reducer