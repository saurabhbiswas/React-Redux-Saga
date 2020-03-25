import { GET_CUSTOMER_LIST,GET_CUSTOMER_ADDRESS } from "../constants/action-types";

export function getCustomerList() {
  return { type: GET_CUSTOMER_LIST};
}

export function getCustomerAddress(id) {
  return { type: GET_CUSTOMER_ADDRESS,payload:id};
}




