import { createSlice } from "@reduxjs/toolkit";

const preferencesSlice = createSlice({
    name: "preferencesReducer",
    initialState: {
        isDarkMode: false
    }
});

console.log(preferencesSlice);
console.log(preferencesSlice.getInitialState());

export default preferencesSlice;