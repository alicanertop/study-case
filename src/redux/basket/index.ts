import { createSlice } from '@reduxjs/toolkit'

import { IItem } from '../../types'
import { calculationBasket } from './helpers'

export type IBasketItem = IItem & { count: number; totalPrice: number }

export interface BasketState {
  itemList: IBasketItem[]
  totalPrice?: number
}

export const initialState: BasketState = { itemList: [], totalPrice: 0 }

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add: (state, action: { type: string; payload: IItem }) => {
      const { itemList, totalPrice } = calculationBasket(state.itemList, action.payload, true)
      state.itemList = itemList
      state.totalPrice = totalPrice
    },
    remove: (state, action: { type: string; payload: IItem }) => {
      const { itemList, totalPrice } = calculationBasket(state.itemList, action.payload, false)
      state.itemList = itemList
      state.totalPrice = totalPrice
    },
    buy: (state) => {
      alert('Buy action triggered')
      state.itemList = []
      state.totalPrice = 0
    },
    clear: (state) => {
      state.itemList = []
      state.totalPrice = 0
    },
  },
})

export default basketSlice.reducer
