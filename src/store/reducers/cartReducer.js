import { ADD_CART, GET_ITEMS_SUCCESS, REMOVE_CART } from "../actions/constants";

const initialState = {
  itemList: [],
  cartList: [],

};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state, 
        cartList: [...state.cartList, state.itemList.find((prod) => prod.id === action.payload)],
      };
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        itemList: action.payload,
      };
    case REMOVE_CART:
      return {
        ...state,
        cartList: state.cartList.filter((prod) => prod.id !== action.payload.id)
      }

  }
  return state;
}
