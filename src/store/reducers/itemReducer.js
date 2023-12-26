import { GET_ITEMS_SUCCESS,} from "../actions/constants";

const initialState = {
  items: [],
};

export function itemReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      }
  }
  return state;
}
