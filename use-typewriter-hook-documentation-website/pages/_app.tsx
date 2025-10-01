import type { AppProps } from "next/app";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
