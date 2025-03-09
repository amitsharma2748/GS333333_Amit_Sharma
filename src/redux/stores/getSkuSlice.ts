import { createSlice } from "@reduxjs/toolkit";

export type SKuStateType={
    skuName:string
    skuPrice:string
    skuCost:string
}

type InitialStateType={
    skuArr:SKuStateType[]
    editKey:number|null,
    editObj:SKuStateType
}

const initialState:InitialStateType={
   skuArr:[],
   editKey:null,
   editObj:{
    skuPrice:"",
    skuName:"",
    skuCost:""
   }
}

const getSkuSlice=createSlice({
    name:"getSku",
    initialState:initialState,
    reducers:{
        addSku:(state,action)=>{
            const storePayload= action.payload
            state.skuArr=[...storePayload]
        },
        deleteSkuByKey:(state,action)=>{
            const deleteKey= action.payload
            const updatedArr=state.skuArr.filter((item,index)=>(index!==deleteKey))
            state.skuArr=[...updatedArr]
        },
        updateStoreByKey:(state,action)=>{
            const {editKey,payload}= action.payload
            state.skuArr.splice(editKey,1,payload)
           
        },
        storeEditObj:(state,action)=>{
            const {editKey,payload}= action.payload
            state.editKey=editKey;
            state.editObj=payload
           
        },
        resetGetSkuSlice:()=>initialState
    }
})

export const {resetGetSkuSlice,addSku ,deleteSkuByKey,updateStoreByKey,storeEditObj}=getSkuSlice.actions
export default getSkuSlice.reducer