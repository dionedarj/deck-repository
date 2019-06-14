import React from "react";
import { render } from "react-dom";
import Root from "./containers/Root";
import { configureStore, history } from "./store/configureStore";

const store = configureStore();

render(
    <Root store={store} history={history} />,
    document.getElementById("root")
);

// if (module.hot) {
//     module.hot.accept("./containers/Root", () => {
//     // eslint-disable-next-line global-require
//         const NextRoot = require("./containers/Root").default;
//         render(
//             <AppContainer>
//                 <NextRoot store={store} history={history} />
//             </AppContainer>,
//             document.getElementById("root")
//         );
//     });
// }
