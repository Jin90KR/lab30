import { ADD_CART, GET_ITEMS_SUCCESS } from "../actions/constants";

const initialState = {
  itemList: [],
  cartList: [],

};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state, 
        cartList: action.payload,
      };
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        itemList: action.payload,
      };

  }
  return state;
}
