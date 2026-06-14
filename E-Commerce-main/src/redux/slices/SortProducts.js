import { createSlice } from "@reduxjs/toolkit";
import { fetchSortProducts } from "../../services/AllProduct";
const initialState={
    data:[],
    loading: false,
    error:null,
    };
    
const Sortproduct=createSlice({
    name: "sortproduct",
    initialState,
    reducers:{},
   extraReducers: (builder)=>{
    builder
       .addCase(fetchSortProducts.pending, (state)=>{
            state.loading=true;
        })
       .addCase(fetchSortProducts.fulfilled, (state,action)=>{
            state.loading=false;
            state.data=action.payload;
        })
       .addCase(fetchSortProducts.rejected, (state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
   }
});
export default Sortproduct.reducer;