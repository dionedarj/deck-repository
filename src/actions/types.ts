import { Action } from "redux";

export const SET_HOME = "SET_HOME";

export interface SetHomeAction extends Action {
    type: typeof SET_HOME,
    payload: string
}

export type HomeActions = SetHomeAction;