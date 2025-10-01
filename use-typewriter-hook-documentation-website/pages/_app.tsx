import type { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/globals.css";
import { HelmetProvider } from "react-helmet-async";
import SEOHead from "../components/SEOHead";

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div>
      <HelmetProvider>
        <SEOHead />
        <Component {...pageProps} />
      </HelmetProvider>
    </div>
  );
}

export default MyApp;
