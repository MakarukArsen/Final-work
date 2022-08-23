import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
    usersReducer,
    newsReducer,
});
export default rootReducer;
