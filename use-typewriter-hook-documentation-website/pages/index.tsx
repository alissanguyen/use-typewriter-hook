import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import BasicTypewriter from "../components/examples/BasicTypewriter";
import CustomCursorTypewriter from "../components/examples/CustomCursorTypewriter";
import CustomTypewriter from "../components/examples/CustomTypewriter";
import TypewriterWithLoop from "../components/examples/TypewriterWithLoop";
import PartialBackspaceTypewriter from "../components/examples/PartialBackspaceTypewriter";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Link from "../components/Link";

const Home: NextPage = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>useTypewriter Hook</title>
        <meta name="useTypewriter" content="Document on how to get started" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app-name-wrapper"></div>
      <Logo />
      <Link to="/api/documentation">
        <button className="documentation-button">View Documentation</button>
      </Link>
      {/* <main className={styles.main}>
        <div className="typewriter typewriter-1">
          <PartialBackspaceTypewriter />
        </div>
        <div className="typewriter typewriter-2">
          <BasicTypewriter />
        </div>
        <div className="typewriter typewriter-3">
          <CustomCursorTypewriter />
        </div>
        <div className="typewriter typewriter-4">
          <CustomTypewriter />
        </div>
        <div className="typewriter typewriter-5">
          <TypewriterWithLoop />
        </div>
      </main> */}

      <Footer />
    </div>
  );
};

export default Home;
