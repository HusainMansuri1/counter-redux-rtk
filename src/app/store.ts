import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counterSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export type TCounterDispatch = typeof store.dispatch;
export type TCounterState = ReturnType<typeof store.getState>;

export default store;