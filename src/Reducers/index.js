import {combineReducers} from "redux";
import userReducer from "./User.reducer";
import bankDataReducer from "./BankData.reducer";

export default  combineReducers({
userReducer,
    bankDataReducer,
});