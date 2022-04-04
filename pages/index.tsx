import React from "react";
import type { GetStaticProps, NextPage } from "next";
import GameContainer from "_components/containers/GameContainer";
import Head from "next/head";
import loadLocales from "_util/loadLocales";
import { useTranslation } from "react-i18next";

const Home: NextPage = () => {
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
                <meta property="og:image" content={`https://srps-wscandy.vercel.app/images/super-rock-paper-scissors.png`} />
            </Head>
            <GameContainer />
        </>
    );
};

export const getStaticProps: GetStaticProps = async context => {
    const resources = await loadLocales(context, "common");
    return { props: { resources } };
};

export default Home;
