import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";
import products from '../products.json'
// const initialState = {items: products, filteredItems: [], size: ""}

export function cartReducer (state = {items: []}, action){
    switch(action.type){

        case ADD_TO_CART:
            return {
            ...state, items: action.payload.cartItems 
            };
        
        
        case REMOVE_FROM_CART:
            return { ...state, items: action.payload.cartItems };



        default:
            return state;

    }
}

