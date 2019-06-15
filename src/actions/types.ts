export const SET_HOME = "SET_HOME";
export const SET_POOP = "SET_POOP";

export type Action = {
    type: string;
    payload?: any;
    meta?: any;
    error?: boolean;
};