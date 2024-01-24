import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
  initialState: {
    value: 0,
    user: ""
  },
  reducers: {
    saveUser: (state, action) => {
        state.user = action.payload;
    },
    getUser: (state) => {
        return state.user;
    }
  },
})

// Action creators are generated for each case reducer function
export const { saveUser, getUser } = userSlice.actions