import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    // saveUser: (state, action) => {
    //     state.user = action.payload;
    // },
    // getUser: (state) => {
    //     return state.user;
    // }
    setUser: (state, action) => {
        state.user = action.payload;
    },
    getUser: (state) => {
        return state.user;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, getUser } = userSlice.actions