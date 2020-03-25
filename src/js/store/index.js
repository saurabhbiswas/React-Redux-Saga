import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(initialiseSagaMiddleware));
initialiseSagaMiddleware.run(apiSaga);
export default store;
