import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./states/user";
import { AppStore } from "../Models";

export default configureStore<AppStore>({
    reducer: {
        user: userSliceReducer
    }
})
