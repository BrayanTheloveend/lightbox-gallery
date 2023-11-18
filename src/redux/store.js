import { combineReducers} from "redux";
import reducerAddBook from "./reducer/reducerAddBook";
import reducerFetch from "./reducer/reducerFetch";
import { configureStore } from "@reduxjs/toolkit";




const store = configureStore({
    reducer: {
        library: reducerAddBook,
    }
})

export default store