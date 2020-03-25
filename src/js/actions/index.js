import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getCustomerList() {
  return { type: "GET_CUSTOMER_LIST"};
}

export function getCustomerAddress(id) {
  return { type: "GET_CUSTOMER_ADDRESS",payload:id};
}




