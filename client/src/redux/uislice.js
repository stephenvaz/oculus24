import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isNavBarOpen: false,
        showParticleRing: true,
    },
    reducers: {
        toggleNavBar: (state) => {
            state.isNavBarOpen = !state.isNavBarOpen;
        },
        setNavBar: (state, action) => {
            state.isNavBarOpen = action.payload;
        },
        setShowParticleRing: (state, action) => {
            state.showParticleRing = action.payload;
        },
    },
});

export const { toggleNavBar, setNavBar, setShowParticleRing } = uiSlice.actions;