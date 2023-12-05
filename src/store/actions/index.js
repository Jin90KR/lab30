import { ADD_CART } from "./constants";

// Action
export const addToCart = (product) => {
  return {
    type: ADD_CART,
    payload: product,
  };
};

