import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; //not needed in master
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunk));

export default configureStore;
