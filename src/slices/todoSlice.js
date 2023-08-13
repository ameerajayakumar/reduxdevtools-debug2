import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todoReducer",
    initialState: {
        filterStatus: "all"
    },
    reducers: {
        changeFilterStatus: (state, action) => { 
            state.filterStatus = action.payload 
        }
    }
});

console.log(todoSlice);
console.log(todoSlice.getInitialState());

// export default todoSlice;
export const { changeFilterStatus } = todoSlice.actions;
export default todoSlice.reducer;