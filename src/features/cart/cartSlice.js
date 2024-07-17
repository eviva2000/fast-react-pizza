import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    //cart: [],
    cart: [
      {
        pizzaId: 1,
        name: 'Margarita',
        quantity: 1,
        unitPrice: 10,
        totalPrice: 10,
      },
    ],
  },
  reducers: {
    addItem(state, action) {
      //payload =new item
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //payload= pizzaId
      const item = state.cart.find(item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity(state, action) {
      //payload= pizzaId
      const item = state.cart.find(() => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
