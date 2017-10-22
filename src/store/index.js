import { combineReducers, createStore } from "redux";
import { scoring, gameplay } from "../reducers";

const reducers = combineReducers({
    scoring: scoring,
    gameplay: gameplay
});

export default createStore(reducers)