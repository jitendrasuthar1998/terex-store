import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

export const addToCart = (items, product) => (dispatch) => {
  // console.log(`addToCart action called`)
  // console.log(`items at addToCart is == ${JSON.stringify(items)}`)
  const cartItems = items.slice();
  let productAlreadyInCart = false;

  cartItems.forEach((cp) => {
    if (cp.name.toLowerCase() === product.name.toLowerCase()) {
      cp.count += 1;
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};

export const removeFromCart = (items, product) => (dispatch) => {
  // console.log(`removeFromCart action called`)
  const cartItems = items.slice().filter((a) => a.name.toLowerCase() !== product.name.toLowerCase());
  
  // console.log(`items are at removeFromCart is == ${JSON.stringify(items)}`)
  // console.log(`product is at removeFromCart is == ${JSON.stringify(product)}`)
  // console.log(`cartItems`)
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
 return dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};
