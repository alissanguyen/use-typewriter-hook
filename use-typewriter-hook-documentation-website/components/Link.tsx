import * as React from "react";
import { useRouter } from "next/router";

interface Props {
  to: string;
}

const Link: React.FC<Props> = (props) => {
  const { to, children } = props;
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.pathname === to ? "red" : "black",
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    router.push(to);
  };

  return (
    <a href={to} onClick={handleClick} style={style}>
      {children}
    </a>
  );
};

export default Link;
