import createStore from "./library/createStore";

const initialState = {
    isDarkMode: false,
    filterStatus: "all"
}

console.log('Running todoStore');

// const toggleDarkMode = (state) => {
//     console.log(state.isDarkMode);
//     state.isDarkMode = !(state.isDarkMode);
//     console.log(state.isDarkMode);
// }

const reducer = (state, action) => {
    console.log('reducer', state, action);
    switch(action.type) {
      case "TOGGLE_DARK_MODE":
        // state.isDarkMode = !(state.isDarkMode);
        return { ...state, isDarkMode: !(state.isDarkMode) }
        // break;
      case "CHANGE_FILTER_STATUS":
        // state.filterStatus = action.status;
        return { ...state, filterStatus: action.status }
        // break;
      default:
        console.log('default case executed');
        break;
    }  
}
  
const store = createStore(initialState, reducer);
  
// const store = createStore(initialState, toggleDarkMode);

export default store;