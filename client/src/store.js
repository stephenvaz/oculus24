import { userSlice } from "./redux/userslice";
import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./redux/uislice";


const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        ui: uiSlice.reducer,

    }
});

export default store;