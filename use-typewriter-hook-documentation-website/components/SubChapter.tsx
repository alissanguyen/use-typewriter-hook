import * as React from "react";

interface Props {
  subChapterName: string;
  hashUrl: string;
  subChapterHref: string;
}

const SubChapter: React.FC<Props> = (props) => {
  const shouldApplySelectedStyles = props.hashUrl.includes(
    props.subChapterHref
  );
  const subChapter = props.subChapterName;
  const subChapterHref = "#" + props.subChapterHref;

  const selectedClassName = shouldApplySelectedStyles
    ? {
        color: "#0070f3",
        fontWeight: 600,
        fontSize: "16px",
        whiteSpace: "normal",
        lineHeight: "20px",
        padding: "12px 0px 10px 17px",
      }
    : {
        fontSize: "16px",
        whiteSpace: "normal",
        lineHeight: "20px",
        padding: "12px 0px 10px 17px",
      };

  const className = shouldApplySelectedStyles ? "selected-navbar-link" : "";

  return (
    <a
      className={`nav-sub-link ${className}`}
      href={subChapterHref}
      style={selectedClassName}
    >
      {subChapter}
    </a>
  );
};

export default SubChapter;
