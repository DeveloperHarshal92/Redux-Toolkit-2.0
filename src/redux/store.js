import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import collectionReducer from "./features/collectionSlice";
import themeReducer from "./features/themeSlice";

export const store = configureStore({
    name: "store",
    reducer : {
        search : searchReducer,
        collection : collectionReducer,
        theme: themeReducer,
    }
})