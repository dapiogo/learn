import { combineReducers } from "redux";
import budget from "./budget.reducer";
import categories from "./common.reducer";

const rootReducers = combineReducers({ budget, categories });

export default rootReducers;
