import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import GameContainer from "_components/containers/GameContainer";
import Head from "next/head";
import absoluteUrl from "next-absolute-url";

interface Props {
    readonly host: string;
}

const Home: NextPage<Props> = props => {
    const { host } = props;

    return (
        <>
            <Head>
                <title>Super Rock Paper Scissors!</title>
                <meta property="og:title" content="Super Rock Paper Scissors!" />
                <meta
                    property="og:description"
                    content="Super Rock Paper Scissors was built in honour of the old 8bit systems, in particular the NES. The design is a twist on the original Super Mario Bros. released in 1985."
                />
                <meta property="og:image" content={`${host}/images/super-rock-paper-scissors.png`} />
            </Head>
            <GameContainer />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async context => {
    return { props: { host: absoluteUrl(context.req).origin } };
};

export default Home;
