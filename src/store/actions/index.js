

import {
  ADD_CART,
  REMOVE_CART,
  INCREASE_NUM,
  DECREASE_NUM,

  GET_ITEMS_SUCCESS
} from "./constants";

const URL = `http://localhost:3000/items`;

// Action
export const getItems = () => {
  return async (dispatch, getState) => {
    const response = await fetch(URL);
    const jsonResult = await response.json();
    // setTimeout(() => {
      console.log(jsonResult)
    dispatch(getItemSuccess(jsonResult));
    // }, 2000);

  };
};


const getItemSuccess = (items) => ({
  type: GET_ITEMS_SUCCESS,
  payload: items,
});



export const addToCart = (product) => {
  console.log(product)
  return {
    type: ADD_CART,
    payload: product,
  };
};

export const removeFromCart = (items) => {
  return {
    type: REMOVE_CART,
    payload: items,
  }
}

export const increaseQty = (quantity) => {
  return {
    type: INCREASE_NUM,
    payload: quantity,
  }
}

export const decreaseQty = (quantity) => {
  return {
    type: DECREASE_NUM,
    payload: quantity,
  }
}

