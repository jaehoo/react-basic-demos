import { VALUES } from "../constants/constants"

export default function movesReducer(state = VALUES, action) {

    switch (action.type) {
        case "FETCH_DATA_SUCCESS":
            return action.payload.moves;
        case "PLAY_POSITION":
            return state+1;
        case "RESET":
            return 0;
        default:
            return state;
    }

}