import "react-hot-loader";
import { hot } from "react-hot-loader/root";
import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Store } from "redux";
import Routes from "../../Routes";

type Props = {
  store: Store,
  history: {}
};

const Root = ({ store, history }: Props) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes />
        </ConnectedRouter>
    </Provider>
);

export default hot(Root);
