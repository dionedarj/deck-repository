import { Reducer } from "redux";
import { SET_HOME, HomeActions } from "../actions/types";

export type HomeState = {
    home: string
};

const initialState: HomeState = {
    home: ""
};

const reducer: Reducer<HomeState, HomeActions> = (state: HomeState = initialState, action) => {
    switch ((action as HomeActions).type) {
    case SET_HOME:
        return {
            ...state,
            home: action.payload
        };
    default:
        return state;
    }
};

export default reducer;