
import { combineReducers, Reducer } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import homeReducer, { HomeState } from "./home";

export interface ApplicationState {
    router: RouterState,
    home: HomeState
}

export default function createRootReducer(history: History): Reducer<ApplicationState> {
    return combineReducers<ApplicationState>({
        router: connectRouter(history),
        home: homeReducer
    });
}
