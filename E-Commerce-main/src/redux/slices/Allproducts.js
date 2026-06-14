import { createSlice } from "@reduxjs/toolkit";
import {  fetchallProducts } from "../../services/AllProduct";
const initialState={
    data:[],
    loading: false,
    error:null,
    };
    
const allProducts=createSlice({
    name: "allproducts",
    initialState,
    reducers:{},
   extraReducers: (builder)=>{
    builder
       .addCase(fetchallProducts.pending, (state)=>{
            state.loading=true;
        })
       .addCase(fetchallProducts.fulfilled, (state,action)=>{
            state.loading=false;
            state.data=action.payload;
        })
       .addCase(fetchallProducts.rejected, (state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
   }
});
export default allProducts.reducer;