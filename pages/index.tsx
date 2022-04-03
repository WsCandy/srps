import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import GameContainer from "_components/containers/GameContainer";
import Head from "next/head";
import absoluteUrl from "next-absolute-url";
import loadLocales from "_util/loadLocales";
import { useTranslation } from "react-i18next";

interface Props {
    readonly host: string;
}

const Home: NextPage<Props> = props => {
    const { host } = props;
    const [t] = useTranslation();

    return (
        <>
            <Head>
                <title>
                    {t("common:meta.title")}
                </title>
                <meta name="description" content={t("common:meta.description")} />
                <meta property="og:title" content={t("common:meta.title")} />
                <meta
                    property="og:description"
                    content={t("common:meta.description")}
                />
                <meta property="og:image" content={`${host}/images/super-rock-paper-scissors.png`} />
            </Head>
            <GameContainer />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async context => {
    const resources = await loadLocales(context, "common");
    return { props: { host: absoluteUrl(context.req).origin, resources } };
};

export default Home;
