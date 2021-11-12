import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/CustomTypewriterStyles.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window === "undefined") {
    return null;
  }

  return <Component {...pageProps} />;
}

export default MyApp;
