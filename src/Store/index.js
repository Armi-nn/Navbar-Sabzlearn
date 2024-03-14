import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./Slice/darkMode";
const store = configureStore({
    reducer: {
        mode: darkModeReducer
    }
})
export default store