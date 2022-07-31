import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
const initialState = { };

//componseEnhancer help you to debug redux workflow in browser, or it connect redux devtools to browser and help us to debug redux workflow.

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk)))