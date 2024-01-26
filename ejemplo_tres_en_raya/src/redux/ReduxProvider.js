import App from "../App"
import { legacy_createStore } from "redux";
import GlobalState from "./reducers";
import { PLAYERX, VALUES } from "../constants/constants";
import { Provider } from "react-redux";

export default function ReduxProvider(params) {
    return (
        <Provider store={legacy_createStore(GlobalState, {values: VALUES, turn: PLAYERX, moves: 0})}>
            <App />
        </Provider>
    );
}