import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}
const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // console.log(action)
            state.cart.push(action.payload.item)
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => {
                // console.log(action.payload.item.id != item.id)
                return item.id !== action.payload.item.id
            })
            // console.log(state)
        }
    }
})
export const { addToCart, removeFromCart } = cartReducer.actions
export default cartReducer.reducer