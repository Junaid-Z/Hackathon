import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	username: '',
	password: ''
}

const loginSlice = createSlice({
	name: 'loginSlice',
	initialState,
	reducers: {
		setLogin: (state, action) => {
			console.log(action)
			let { username, password } = action.payload;
			state.username = username;
			state.password = password;
		}
	}
})
export const { setLogin } = loginSlice.actions
export default loginSlice.reducer