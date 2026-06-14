import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../../services/AllProduct";
const initialState={
    data:[],
    loading: false,
    error:null,
    };
    
const Userslice=createSlice({
    name: "alluser",
    initialState,
    reducers:{},
   extraReducers: (builder)=>{
    builder
       .addCase(fetchUser.pending, (state)=>{
            state.loading=true;
        })
       .addCase(fetchUser.fulfilled, (state,action)=>{
            state.loading=false;
            state.data=action.payload;
        })
       .addCase(fetchUser.rejected, (state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
   }
});
export default Userslice.reducer;