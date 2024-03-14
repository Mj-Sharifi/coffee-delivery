import { createSlice } from "@reduxjs/toolkit"

const initialState={info:{}}
const formSlice = createSlice({
    name:"form",
    initialState,
    reducers:{
        submit:(state,action)=>{
            state.info=action.payload
        }
    }

})
export const {submit}=formSlice.actions
export default formSlice.reducer 