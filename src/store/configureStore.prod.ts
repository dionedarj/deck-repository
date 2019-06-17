import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { createHashHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer, { ApplicationState } from "../reducers";
import { HomeActions } from "../actions";

const history = createHashHistory();
const rootReducer = createRootReducer(history);
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router);

function configureStore(initialState): Store<ApplicationState> {
    return createStore<ApplicationState, HomeActions, any, any>(rootReducer, initialState, enhancer);
}

export default { configureStore, history };
