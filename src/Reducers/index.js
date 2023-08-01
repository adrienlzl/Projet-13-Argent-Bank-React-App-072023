import {combineReducers} from "redux";
import userReducer from "./User.reducer";
import bankDataReducer from "./BankData.reducer";
import tokenReducer from "./token.Reducer";

export default  combineReducers({
userReducer,
    bankDataReducer,
    tokenReducer,
});