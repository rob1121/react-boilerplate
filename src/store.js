import {createStore, combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import header from "./reducers/headerReducer";
import footer from "./reducers/footerReducer";

export default createStore(
    combineReducers({header, footer}),
    {},
    applyMiddleware(createLogger())
);
