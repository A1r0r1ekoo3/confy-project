import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlise";

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
  },
});
