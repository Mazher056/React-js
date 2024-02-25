import { createSlice } from "@reduxjs/toolkit"


const privercySlice = createSlice({
    name: 'privercy',
    initialState: false,
    reducers: {
      toggle:(state)=>{
        return state= !state 
      }
    }
  })

  
export const privercyActions= privercySlice.actions;
export default privercySlice;;