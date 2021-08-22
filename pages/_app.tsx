import "../root.scss";
import "../styles/globals.scss";
import "../font-awesome";
import type { AppProps } from "next/app";
import Head from "next/head";
import TopNav from "../src/layout/TopNav";
import { useState } from "react";
import { OverlayGrid } from "../src/component/utilities";

function MyApp({ Component, pageProps }: AppProps) {
  const [gridOn, setGridOn] = useState(false);

  const onClickGrid = () => {
    setGridOn(!gridOn);
  };

  return (
    <>
      <Head>
        <title>Subliminal Stimuli Portfolio</title>
      </Head>
      <TopNav onClickGrid={onClickGrid} devTools gridOn={gridOn} />
      <Component {...pageProps} />
      {gridOn && <OverlayGrid />}
    </>
  );
}
export default MyApp;
