import * as React from "react";
import Image from "next/image";
import GitHubLogo from "./github.png";
import LinkedInLogo from "./linkedin.png";
import styles from "../styles/Home.module.css";
import { useTypewriter } from "use-typewriter-hook";

interface Props { }

const Footer: React.FC<Props> = ({ }) => {
  return (
    <footer className="footer">
      <div className="footer_credits">
        <span>
          Powered by{" "}
            <Image src="/vercel.svg" alt="Vercel Logo" className="vercel-logo" width={72} height={14} />
          {" "}
          <span className="copyright">Copyright © 2025</span>
        </span>
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
          href="https://www.linkedin.com/in/alissanguyen-com/"
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

const Author: React.FC<Props> = ({ }) => {
  const targetText = "From Alissa Nguyen with love. :)";
  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    autoStartDelay: 100,
    typingDelayMillis: 100,
    loopDelay: 600,
    loop: true,
  });
  return <div className={`${wrapperClassName} author`}>{typedText}</div>;
};