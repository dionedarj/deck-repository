
import React from "react";

type Props = {
    children: React.ReactNode
};

const App = (props: Props) => {
    const { children } = props;
    return <React.Fragment>{children}</React.Fragment>;
};

export default App;
