

import { take,put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from '../actions'
 export function* watchGetAllCustomers() {
  console.log("GET_CUSTOMER_LIST");
  yield takeEvery("GET_CUSTOMER_LIST", workerSagaCustomerList);
  
}

export function* watchGetAddressDetail(action) {
console.log("GET_CUSTOMER_ADDRESS watchGetAddressDetail");


  yield takeEvery("GET_CUSTOMER_ADDRESS", workerSagaAddress);

}
 export function* workerSagaCustomerList() {
  console.log("workerSagaCustomerList");
  try {
    const payload = yield call(getData);
    console.log(payload);
    yield put({ type: "CUSTOMER_LIST_LOADED", payload });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}


export function* workerSagaAddress(action) {
  console.log("workerSagaAddress",action);
  if(action&&action.payload)
    console.log(action.payload.selectedCustomer);
  let id=action&&action.payload?action.payload.selectedCustomer:-1;
 
  try {

    const payload = yield call(getAddress,id);
    yield put({ type: "CUSTOMER_ADDRESS_LOADED", payload });
  } catch (e) {
    
    yield put({ type: "API_ERRORED", payload: e });
  }
}


function getAddress(id){
  console.log("getAddress is claled in side saga",id);
  
    if(id){
     console.log("id inside",id)
    return  axios.get('assets/samplejson/customer'+id+'.json').then(response=>response.data);
     }
  else {
    throw new Error("invalid id");
  }

}
function getData() {
console.log("data fetch called")
return  axios.get('assets/samplejson/customerlist.json').then(response =>  response.data)

 
}


export default function* root() {
  yield all([fork(watchGetAllCustomers), 
    fork(watchGetAddressDetail),
    fork(workerSagaCustomerList),
    fork(workerSagaAddress)])
}

