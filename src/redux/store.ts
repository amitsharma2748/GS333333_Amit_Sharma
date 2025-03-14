import { configureStore } from "@reduxjs/toolkit";
import getStoresSlice from "../redux/stores/getStoresSlice"
import getSkuSlice from "../redux/stores/getSkuSlice"
import { useDispatch } from "react-redux";

export const store =configureStore({
    reducer:{
        getStoresSlice:getStoresSlice,
        getSkuSlice:getSkuSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();