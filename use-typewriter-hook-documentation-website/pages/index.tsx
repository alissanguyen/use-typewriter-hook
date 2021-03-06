import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className="home-page">
        <div className="home-page-content-wrapper">
          <Head>
            <title>useTypewriter Hook</title>
            <meta
              name="useTypewriter"
              content="Document on how to get started"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="app-name-wrapper">
            <Logo />
            <div>
              <Link href="/documentation" passHref>
                <button className="documentation-button">
                  View Documentation
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-page-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
