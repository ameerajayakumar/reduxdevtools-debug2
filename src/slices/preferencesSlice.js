import { createSlice } from "@reduxjs/toolkit";

const preferencesSlice = createSlice({
    name: "preferencesReducer",
    initialState: {
        isDarkMode: false
    },
    reducers: {
        toggleDarkMode: (state, action) => { 
            state.isDarkMode = !state.isDarkMode 
        }
    }
});

console.log(preferencesSlice);
console.log(preferencesSlice.getInitialState());

export default preferencesSlice;