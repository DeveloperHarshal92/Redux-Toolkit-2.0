import { createSlice } from "@reduxjs/toolkit";


const search = createSlice({
    name: "search",
    initialState: {
        query: "",
        activeTabs: "photos",
        page: 1,
        result: [],
        loading : false,
        error : null
    },
    reducers: { 
        setQuery: (state, action) => {
            state.query = action.payload;
            state.page = 1;
        },
        setActiveTabs : (state, action) => {
            state.activeTabs = action.payload;
            state.page = 1;
        },
        setPage : (state, action) => {
            state.page = action.payload;
        },
        setResult : (state, action) => {
            state.result = action.payload;
            state.loading = false;
        },
        setLoading : (state) => {
            state.loading = true;
            state.error = null;
        },
        setError : (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        clearResult : (state) => {
            state.result = [];
        }
    }
})

export const { setQuery, setActiveTabs, setPage, setResult, setLoading, setError , clearResult } = search.actions;
export default search.reducer;