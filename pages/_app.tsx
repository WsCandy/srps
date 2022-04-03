import "_styles/vars.css";
import "_styles/base.css";
import React from "react";
import type { AppProps } from "next/app";
import { wrapper } from "_redux/stores/store";
import useI18n from "_util/useI18n";

const App: React.FunctionComponent<AppProps> = props => {
    const { Component, pageProps } = props;
    useI18n(pageProps)
    return <Component {...pageProps} />;
};

export default wrapper.withRedux(App)
