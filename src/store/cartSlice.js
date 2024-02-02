import { createSlice } from  "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartList: [],
        total: 0
    },
    reducers:{
       add(state,action){
            const updatedCart = state.cartList.concat(action.payload);
            const total = state.total + action.payload.id;
            return {...state, total:total , cartList: updatedCart}
       },
       remove(state,action){ 
            const updatedCart = state.cartList.filter(item => item.id !== action.payload.id);
            const total = state.total -  action.payload.id;
            return {...state, total:total, cartList: updatedCart}
        }
    }
});
export const {add , remove} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;