export function playPosition(payload){
    return { type: "PLAY_POSITION", payload}
}

export function reset(){
    return { type: "RESET" }
}

export function fetchDataAction(payload){
    return {type: "FETCH_DATA_SUCCESS", payload }
}