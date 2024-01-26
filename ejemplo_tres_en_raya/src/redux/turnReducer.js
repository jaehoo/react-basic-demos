import {PLAYERX, PLAYER0, VALUES} from "../constants/constants"

export default function turnReducer(state = '0', action) {

    switch (action.type) {

        case "FETCH_DATA_SUCCESS":
            return action.payload.turn;
        case "PLAY_POSITION":
            return action.payload.turn === PLAYERX ? PLAYER0: PLAYERX;
        case "RESET":
            return PLAYERX;
        default:
            return state;
    }

}