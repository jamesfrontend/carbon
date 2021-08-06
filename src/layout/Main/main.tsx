import react, { useState } from "react";
import Head from "next/head";
import TopNav from "../TopNav";
import navItems from "../../../config/navItems";
import { OverlayGrid } from "../../component/utilities";

interface MainProps {}
const Main: React.FC<MainProps> = ({ children }) => {
  const [gridOn, setGridOn] = useState(false);

  function onClickGrid() {
    setGridOn(!gridOn);
  }
  return (
    <>
      <Head>
        <title>Subliminal Stimuli Portfolio</title>
        <meta
          name="description"
          content="Partners THERESE, artist, and James, UX Engineer, creating digital art and content"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNav navItems={navItems} onClickGrid={onClickGrid} gridOn={gridOn} />
      <>{children}</>
      {gridOn && <OverlayGrid />}
    </>
  );
};

export default Main;
