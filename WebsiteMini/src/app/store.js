import { configureStore } from "@reduxjs/toolkit";
import cartShopReducer from "../feature/CartSlice";
import FavoriteReducer from "../feature/Favorite";

export const store = configureStore({
  reducer: {
    cart: cartShopReducer,
    favorite: FavoriteReducer,
  }
});