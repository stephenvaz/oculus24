import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isNavBarOpen: false ,
    },
    reducers: {
        toggleNavBar: (state) => {
            state.isNavBarOpen = !state.isNavBarOpen;
        },
    },
});

export const { toggleNavBar } = uiSlice.actions;