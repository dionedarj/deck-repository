import { ActionCreator } from "redux";
import { SET_HOME, SetHomeAction } from "./types";

export const setHome: ActionCreator<SetHomeAction> = (home: string) => ({
    type: SET_HOME,
    payload: home
});
