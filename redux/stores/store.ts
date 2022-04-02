import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import root from "_redux/reducers/root";
import highScoreMiddleware from "_redux/middleware/highScoreMiddleware";

const createStore = () =>
    configureStore({
        reducer: root(),
        devTools: process.env.NODE_ENV !== "production",
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware()
                .prepend(highScoreMiddleware)
    });

export type Store = ReturnType<typeof createStore>;

export type AppDispatch = Store["dispatch"];

export const wrapper = createWrapper<Store>(createStore, { debug: false });
