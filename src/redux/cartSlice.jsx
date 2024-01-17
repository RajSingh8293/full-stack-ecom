import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    // cart: JSON.parse(localStorage.getItem('cart')) ?? [],
    cart: localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [],
  },
  reducers: {
    addToCart: (state, action) => {
      // console.log(action.payload)
      const existItem = state.cart.find((item) => item.id === action.payload.id)
      if (existItem) {
        existItem.quantity++
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
    },

    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload)
      state.cart = removeItem
    },

    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      item.quantity++
    },

    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--
      }
    },
  },
})

export const {
  addToCart,
  removeItem,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions
export const cartReducer = cartSlice.reducer
