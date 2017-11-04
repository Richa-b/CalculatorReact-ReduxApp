
import {applyMiddleware, createStore} from "redux";
import {combineReducer} from "../reducers/index";
import {logger, thunk} from "../middlewares/index";

const store = createStore(combineReducer,applyMiddleware(logger,thunk));

export default store