import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const intialState ={
    books: localStorage.getItem("booksData") ? JSON.parse(localStorage.getItem("booksData")) : []
}



//reducer


const reducerAddBook = createSlice({
    name: 'library',
    initialState: intialState.books,
    reducers: {
        addBook: (state, action)=>{
           const newBook = {
            id : uuid(),
            title: action.payload.title,
            author: action.payload.author
           }

            state.push(newBook)
            localStorage.setItem("booksData", JSON.stringify(state))
            
        },
        delBook: (state, action)=>{
            state = state.filter(book => book.id !== action.payload )
            localStorage.setItem("booksData", JSON.stringify(state))
            return state
        },
        cleanBook: (state)=>{
            state = []
            localStorage.clear()
            return state
        }
    }
})

// redux

// const reducerAddBook =( state=intialState.books, action)=>{

    


//     switch (action.type) {
//         case ADD_BOOKS:
//            state =  [...state, HelperAddData(action) ]
//            localStorage.setItem("booksData", JSON.stringify(state))
//            return state

//         case DEL_BOOKS:
//            state = removeDataById(state, action.payload)
//            localStorage.setItem("booksData", JSON.stringify(state))
//            return state

//         case CLEAR:
//            state = intialState.books
//            localStorage.clear()
//             return state
//         default:
//            return state
//     }
// }





export const {addBook, delBook, cleanBook}=  reducerAddBook.actions

export default reducerAddBook.reducer