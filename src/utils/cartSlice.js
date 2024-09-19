import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsList:[]
    },
    reducers:{
        addItems: (state,action)=>{
            state.itemsList.push(action.payload)
        },
        removeItems: (state)=>{
            state.itemsList.pop();
        },
        clearCart:(state)=>{
            state.itemsList.length = 0;
        }
    }
});

export default cartSlice.reducer;
export const {addItems,removeItems,clearCart} = cartSlice.actions;