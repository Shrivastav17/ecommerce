import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    brandDataTransfer : (state,action)=>{
        // console.log(action.payload);
        state.value = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { brandDataTransfer } = brandSlice.actions

export default brandSlice.reducer