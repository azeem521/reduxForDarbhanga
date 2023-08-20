import { createSlice } from "@reduxjs/toolkit";

const isAuthentcate=true;

const AuthSlice=createSlice({
    name:'Kuchh bhi',
    initialState:isAuthentcate,is2,
    reducers:{
        setIsAuthenticate(state,action){
            state.isAuthentcate=!state.isAuthentcate;
        },
    }
})