import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";
import loginSlice from "../reducers/loginSlice";
import cartSlice from "../reducers/cartSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		login: loginSlice,
		cart: cartSlice
	},
})