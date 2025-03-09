import { createSlice } from "@reduxjs/toolkit";

export type StoreStateType={
    storeName:string
    storeCity:string
    storeState:string
}

type InitialStateType={
    storeArr:StoreStateType[]
    editKey:number|null,
    editObj:StoreStateType
}

const initialState:InitialStateType={
   storeArr:[],
   editKey:null,
   editObj:{
    storeCity:"",
    storeName:"",
    storeState:""
   }
}

const getStoresSlice=createSlice({
    name:"getStore",
    initialState:initialState,
    reducers:{
        addStores:(state,action)=>{
            const storePayload= action.payload
            state.storeArr=[...storePayload]
        },
        deleteStoreByKey:(state,action)=>{
            const deleteKey= action.payload
            const updatedArr=state.storeArr.filter((item,index)=>(index!==deleteKey))
            state.storeArr=[...updatedArr]
        },
        updateStoreByKey:(state,action)=>{
            const {editKey,payload}= action.payload
            state.storeArr.splice(editKey,1,payload)
           
        },
        storeEditObj:(state,action)=>{
            const {editKey,payload}= action.payload
            state.editKey=editKey;
            state.editObj=payload
           
        },
        resetGetStoresSlice:()=>initialState
    }
})

export const {resetGetStoresSlice,addStores ,deleteStoreByKey,updateStoreByKey,storeEditObj}=getStoresSlice.actions
export default getStoresSlice.reducer