import * as React from "react";

interface Props {
  subChapterName: string;
  hashUrl: string;
  subChapterHref: string;
}

const SubChapter: React.FC<Props> = (props) => {
  const shouldApplyCustomStyle = props.hashUrl.includes(props.subChapterHref);
  const subChapter = props.subChapterName;
  const subChapterHref = "#" + props.subChapterHref;
  const customStyle = shouldApplyCustomStyle
    ? {
        color: "#0070f3",
        fontWeight: "600",
        fontSize: "16px",
        whiteSpace: "normal",
        lineHeight: "20px",
        padding: "12px 10px 25px 17px",
      }
    : {
        fontSize: "16px",
        whiteSpace: "normal",
        lineHeight: "20px",
        padding: "12px 10px 25px 17px",
      };
  return (
    <a className="nav-sub-link" href={subChapterHref} style={customStyle}>
      {subChapter}
    </a>
  );
};

export default SubChapter;
