import { Action } from "redux";

export interface RootState {
    count: number;
}

export const reduce = (
    state: RootState = { count: 0 }, 
    action: Action
): RootState => {
    if (action.type === "INC") {
        return { count: state.count + 1 }
    }
    return state;
}

export const increment = () => ({ type: "INC" });
