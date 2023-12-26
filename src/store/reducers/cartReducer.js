import { ADD_CART, REMOVE_CART,} from "../actions/constants";

const initialState = [];

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:

      return [...state, action.payload];



    case REMOVE_CART:
      console.log(action.payload)
      return {
        ...state,
        cartList: state.cartList.filter((prod) => prod.id !== action.payload.id),

      }

    // case INCREASE_NUM:
    //   console.log(action.payload)
      

    // case DECREASE_NUM:
    //   console.log(action.payload)
    
  }
  return state;
}
