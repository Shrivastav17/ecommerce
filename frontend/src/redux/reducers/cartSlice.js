import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addValueInCart(state,action){
        // console.log('addValueInCart');
        console.log("====");
        console.log(action.payload);
        var record = action.payload;
        var newvalue =  [...state.value,...record];
        console.log("newvalue");
        console.log(newvalue);

        state.value = newvalue;
    },
    addValueOnButtonClick (state,action){
        console.log("=====>>>>");
        console.log(action.payload);
        var newvalue =  [...state.value,action.payload];
        state.value = newvalue;
    },
    removeProductFromCart(state, action){

      // [{},{},{}]
      // length=0 ==> []
      // [{},{},{}] 

      var record = action.payload;
      // state.value.length = 0;
      state.value=[];
      var newvalue =  [...state.value,...record];
      state.value = newvalue;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addValueInCart ,addValueOnButtonClick,removeProductFromCart} = cartSlice.actions

export default cartSlice.reducer