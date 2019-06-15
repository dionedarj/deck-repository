import { SET_HOME, Action } from "./types";

export const setHome = (home: String): Action => ({
    type: SET_HOME,
    payload: home
});

export default {
    setHome
};