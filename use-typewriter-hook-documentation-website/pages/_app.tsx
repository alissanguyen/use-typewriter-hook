import type { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/globals.css";
import SEOHead from "../components/SEOHead";

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div>
        <SEOHead />
        <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
