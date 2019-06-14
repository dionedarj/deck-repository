import "react-hot-loader";
import { hot } from "react-hot-loader/root";
import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Store } from "../reducers/types";
import Routes from "../Routes";

type Props = {
  store: Store,
  history: {}
};

class Root extends React.Component<Props> {
    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Routes />
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default hot(Root);
