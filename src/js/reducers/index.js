import { CUSTOMER_ADDRESS_LOADED,CUSTOMER_LIST_LOADED } from "../constants/action-types";


const initialState = {
  customerList: [],
  customerAddress: {}
};

function rootReducer(state = initialState, action) {
  
  if (action.type === CUSTOMER_ADDRESS_LOADED) {

    return Object.assign({}, state, {
      customerAddress: action.payload
    });
  }
  if (action.type === CUSTOMER_LIST_LOADED) {
   return Object.assign({}, state, {
      customerList: action.payload
    });
  }
  return state;
}

export default rootReducer;
