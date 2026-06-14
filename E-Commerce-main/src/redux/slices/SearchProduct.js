import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchProduct } from "../../services/AllProduct";
const initialState={
    data:[],
    loading: false,
    error:null,
    };
    
const searchProduct=createSlice({
    name: "searchproduct",
    initialState,
    reducers:{},
   extraReducers: (builder)=>{
    builder
       .addCase(fetchSearchProduct.pending, (state)=>{
            state.loading=true;
        })
       .addCase(fetchSearchProduct.fulfilled, (state,action)=>{
            state.loading=false;
            state.data=action.payload;
        })
       .addCase(fetchSearchProduct.rejected, (state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
   }
});
export default searchProduct.reducer;