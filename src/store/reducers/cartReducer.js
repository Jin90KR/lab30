import { ADD_CART } from "../actions/constants";

const initialState = [];

export function cartReducer(state = initialState, action) {
 switch (action.type) {
    case ADD_CART:
        return [...state, action.payload];
    
 }
  return state;
}
