import { combineReducers } from "redux";
import valuesReducer from "./valuesReducer";
import movesReducer from "./movesReducers";
import turnReducer from "./turnReducer"

const GlobalState = combineReducers({
    values:valuesReducer,
    turn: turnReducer,
    moves: movesReducer
});


export default GlobalState;