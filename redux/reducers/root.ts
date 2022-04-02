import { combineReducers } from "redux";
import AppState from "_redux/model/AppState";
import gameplay from "_redux/reducers/gameplay/gameplay";

const rootReducer = () => {
    return combineReducers<AppState>({
        gameplay
    });
};

export default rootReducer;