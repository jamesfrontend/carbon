import "../root.scss";
import "../styles/globals.scss";
import "../font-awesome";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
