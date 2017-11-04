import {calculate} from "./calculateResult";

export function combineReducer(currentState, action) {
    let nextState = Object.assign({},currentState);
    nextState = {
        result:calculate(nextState.result, action),
    };
    return nextState;
}