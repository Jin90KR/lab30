import { ADD_CART, GET_ITEMS_SUCCESS, REMOVE_CART } from "../actions/constants";

const initialState = {
  itemList: [],
  cartList: [],
  

};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        itemList: action.payload,
      };
    case ADD_CART:
      const addedItem = state.itemList.find((item) => item.id === action.payload)
      const existedItem = state.cartList.find((item) => addedItem.id === item.id)
      if(existedItem){
        addedItem.quantity += 1
        console.log(addedItem)
        // return {
        //   ...state,

        // }
      }
      else{
        console.log(addedItem)
        return {
          ...state, 
          cartList: [...state.cartList, addedItem],
          // totalPrice: state.totalPrice + action.payload.price
        };
      }
      
    
    case REMOVE_CART:
      console.log(action.payload)
      return {
        ...state,
        cartList: state.cartList.filter((prod) => prod.id !== action.payload.id),
        // totalPrice: state.totalPrice - action.payload.price
      }
  }
  return state;
}
