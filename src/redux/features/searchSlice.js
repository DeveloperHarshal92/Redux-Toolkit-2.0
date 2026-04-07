import { createSlice } from "@reduxjs/toolkit";


const search = createSlice({
    name: "search",
    initialState: {
        query: "",
        activeTabs: "photos",
        result: [],
        loading : false,
        error : null
    },
    reducers: { 
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        setActiveTabs : (state, action) => {
            state.activeTabs = action.payload;
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

export const { setQuery, setActiveTabs, setResult, setLoading, setError , clearResult } = search.actions;
export default search.reducer;