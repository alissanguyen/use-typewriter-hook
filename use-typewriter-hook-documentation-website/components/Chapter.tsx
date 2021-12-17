import * as React from "react";

interface Props {
  chapterName: string;
  hashUrl: string;
  updateHash: (id: string) => void;
}

const Chapter: React.FC<Props> = (props) => {
  const shouldApplySelectedClass = props.hashUrl.includes(props.chapterName);
  const chapter = props.chapterName;
  const chapterHref = "#" + chapter;

  const selectedClass = shouldApplySelectedClass
    ? { color: "#0070f3", fontWeight: 600 }
    : undefined;

  const className = selectedClass ? "selected-navbar-link" : "";
  return (
    <a
      className={`nav-link ${className}`}
      href={chapterHref}
      style={selectedClass}
      onClick={() => {
        props.updateHash(chapter);
        console.log("inchapter" + chapter);
      }}
    >
      {chapter}
    </a>
  );
};

export default Chapter;
