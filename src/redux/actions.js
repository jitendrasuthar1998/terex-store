import {ADD_TO_CART, GET_STORE_DETAILS, REMOVE_FROM_CART} from './constants';

export const addToCart = data => {
  console.log('addToCart action has been called');
  console.log('data of addToCart action is == ', data);
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const removeToCart = data => {
  console.log('removeToCart Action has been called');
  console.log('data in removeToCart is == ', data);

  return {
    type: REMOVE_FROM_CART,
    payload: data,
  };
};