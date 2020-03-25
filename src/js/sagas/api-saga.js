
  import { put, call, fork, takeEvery, all } from 'redux-saga/effects'
  import axios from 'axios';
  import * as actionType from "../constants/action-types";



   export function* watchGetAllCustomers() {
    yield takeEvery(actionType.GET_CUSTOMER_LIST, workerSagaCustomerList);
   }

  export function* watchGetAddressDetail(action) {
   yield takeEvery(actionType.GET_CUSTOMER_ADDRESS, workerSagaAddress);
   }
   export function* workerSagaCustomerList() {
   try {
      const payload = yield call(getData);
      yield put({ type: actionType.CUSTOMER_LIST_LOADED, payload });
    } catch (e) {
      yield put({ type: actionType.CUSTOMER_LIST_LOAD_ERROR, payload: e });
    }
  }


  export function* workerSagaAddress(action) {
   
    /*if(action&&action.payload)
      console.log(action.payload.selectedCustomer);*/
    let id=action&&action.payload?action.payload.selectedCustomer:actionType.CUSTOMER_INVALID_ID;
   
    try {
      const payload = yield call(getAddress,id);
      yield put({ type: actionType.CUSTOMER_ADDRESS_LOADED, payload });
    } catch (e) {
       yield put({ type: actionType.CUSTOMER_ADDRESS_LOAD_ERROR, payload: e });
    }
  }


  function getAddress(id){
    if(id!==actionType.CUSTOMER_INVALID_ID){
      return  axios.get('assets/samplejson/customer'+id+'.json').then(response=>response.data);
       }
    else {
      throw new Error(actionType.CUSTOMER_INVALID_ID_ERROR);
       }

  }
  function getData() {
    return  axios.get('assets/samplejson/customerlist.json').then(response =>  response.data)
  }


  export default function* root() {
    yield all([fork(watchGetAllCustomers), 
      fork(watchGetAddressDetail),
      fork(workerSagaCustomerList),
      fork(workerSagaAddress)])
  }

