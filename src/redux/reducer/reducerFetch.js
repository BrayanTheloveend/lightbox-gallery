import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'



export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8080"}),
    endpoints: (builder)=>({
        getPost: builder.query({
            query: ()=> '/post'
        })
    })
})


export const {
    useGetPostQuery
} = apiSlice



















// import { FETCH_BOOK_ERROR, FETCH_BOOK_SUCCESS, FETCH_BOOK_LOADING } from "../constants";

// const initialState = {
//     isLoading: false,
//     fetchedBooks: [],
//     error: ''
// }


// const reducerFetch=(state=initialState, action)=>{

//     switch (action.type) {
//         case FETCH_BOOK_LOADING:
//             return {
//                 ...state, 
//                 isLoading: true
//             }

//         case FETCH_BOOK_SUCCESS:
//             return {
//                 ...state, 
//                 isLoading: false,
//                 fetchedBooks: action.payload 
//             }

//         case FETCH_BOOK_ERROR:
//             return {
//                 ...state, 
//                 isLoading: false,
//                 fetchedBooks: [],
//                 error: action.payload 
//             }
//         default:
//             return state
//     }
//}

