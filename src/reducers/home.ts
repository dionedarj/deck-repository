import { SET_HOME } from "../actions/types";

const initialState = {
    home: ""
};

const home = (state = initialState, action) => {
    switch (action.type) {
    case SET_HOME:
        return {
            ...state,
            home: action.payload
        };
    default:
        return state;
    }
};

export default home;