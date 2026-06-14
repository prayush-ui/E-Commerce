import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../services/AllProduct";
const initialState={
    data:[],
    loading: false,
    error:null,
    };
    
const allProduct=createSlice({
    name: "allproduct",
    initialState,
    reducers:{},
   extraReducers: (builder)=>{
    builder
       .addCase(fetchData.pending, (state)=>{
            state.loading=true;
        })
       .addCase(fetchData.fulfilled, (state,action)=>{
            state.loading=false;
                        state.data=action.payload;
        })
       .addCase(fetchData.rejected, (state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
   }
});
export default allProduct.reducer;