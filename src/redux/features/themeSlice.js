import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Check local storage or default to dark mode
  isDark: localStorage.getItem("theme") !== "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
      localStorage.setItem("theme", state.isDark ? "dark" : "light");
      
      // Update the document element class
      if (state.isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    setTheme: (state, action) => {
      state.isDark = action.payload;
      localStorage.setItem("theme", state.isDark ? "dark" : "light");
      
      if (state.isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
