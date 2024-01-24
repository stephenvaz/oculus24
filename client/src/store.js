import { createStoreHook } from "react-redux";
import { userSlice } from "./redux/userslice";
import { configureStore, createStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    }
});

export default store;