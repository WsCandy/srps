import "_styles/vars.css";
import "_styles/base.css";
import React from "react";
import type { AppProps } from "next/app";

const App: React.FunctionComponent<AppProps> = props => {
    const { Component, pageProps } = props;

    return <Component {...pageProps} />;
};

export default App;
