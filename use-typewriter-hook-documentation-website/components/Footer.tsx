import * as React from "react";
import Image from "next/image";
import GitHubLogo from "./github.png";
import LinkedInLogo from "./linkedin.png";
import styles from "../styles/Home.module.css";
import Author from "./Author";

interface Props {}

const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className="footer">
      <div className="footer_credits">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </div>
      <div className="footer_author">
        <Author />
      </div>
      <div className="footer_icons">
        <a
          href="https://github.com/alissanguyen/react-use-typewriter"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.logo}>
            <Image src={GitHubLogo} alt="Github Logo" width={20} height={20} />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/tam-pmnguyen/"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.logo}>
            <Image
              src={LinkedInLogo}
              alt="Github Logo"
              width={20}
              height={20}
            />
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
