import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));
const cartKey = `cart_${user?.id}`;

const initialState = {
  list: user ? JSON.parse(localStorage.getItem(cartKey)) || [] : [],
};

const CartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    //Thêm giỏ hàng
    addToCart: (state, action) => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        return;
      }

      const product = state.list.find((item) => item.id === action.payload.id);

      if (product) {
        product.quantity += 1;
      } else {
        state.list.push({
          ...action.payload,
          quantity: 1,
        });
      }

      localStorage.setItem(`cart_${user.id}`, JSON.stringify(state.list));
    },
    //Xóa giỏ hàng
    removeToCard: (state, action) => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        return;
      }

      state.list = state.list.filter(
        (product) => product.id !== action.payload,
      );

      localStorage.setItem(`cart_${user.id}`, JSON.stringify(state.list));
    },
    //tăng số lượng
    sumProduct: (state, action) => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        return;
      }

      const product = state.list.find((item) => item.id === action.payload);

      if (product) {
        product.quantity += 1;
      }

      localStorage.setItem(`cart_${user.id}`, JSON.stringify(state.list));
    },
    //Giảm số lượng
    subtraction: (state, action) => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        return;
      }

      const product = state.list.find((item) => item.id === action.payload);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }

      localStorage.setItem(`cart_${user.id}`, JSON.stringify(state.list));
    },
    //Làm mới card
    clearCart: (state) => {
      state.list = [];
    },
    
    setCart: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addToCart, removeToCard, sumProduct, subtraction, clearCart, setCart } =
  CartSlice.actions;

export default CartSlice.reducer;
