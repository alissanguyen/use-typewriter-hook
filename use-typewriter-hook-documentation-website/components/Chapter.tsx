import * as React from "react";

interface Props {
  chapterName: string;
  hashUrl: string;
}

const Chapter: React.FC<Props> = (props) => {
  const shouldApplyCustomStyle = props.hashUrl.includes(props.chapterName);
  const chapter = props.chapterName;
  const chapterHref = "#" + chapter;
  const customStyle = shouldApplyCustomStyle
    ? { color: "#0070f3", fontWeight: "600" }
    : undefined;
  return (
    <a className="nav-link" href={chapterHref} style={customStyle}>
      {chapter}
    </a>
  );
};

export default Chapter;
