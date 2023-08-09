// import { createStore } from "redux";
// import { rootReducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import { reducersMapping } from "./reducers";

  
// const store = createStore(rootReducer);
const store = configureStore({
    reducer: reducersMapping
})
console.log(store);

export default store;