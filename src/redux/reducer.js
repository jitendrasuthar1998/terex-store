import {ADD_TO_CART, GET_STORE_DETAILS, REMOVE_FROM_CART} from './constants';

export const cartReducer = (state = {cartItems: []}, action) => {
  // console.log('initialState is == ', initialState)
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload;

      const exist = state.cartItems.find(x => x.name === product.name);

      if (exist) {
        return {
          ...state,
          cartItems: state.cartItems.map(x =>
            x.name === product.name
              ? {
                  ...exist,
                  qty: exist.qty + 1,
                }
              : x,
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, {...product, qty: 1}],
        };
      }

    case REMOVE_FROM_CART:
      const checkProduct = action.payload;
      const existItem = state.cartItems.find(x => x.name === checkProduct.name);
      if (existItem.qty === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter(x => x.name !== checkProduct.name),
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.map(x =>
            x.name === checkProduct.name
              ? {
                  ...existItem,
                  qty: existItem.qty - 1,
                }
              : x,
          ),
        };
      }

    default:
      return state;
  }
};