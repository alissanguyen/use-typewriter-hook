import * as React from "react";

interface Props {
  hashUrl: string;
  chapterName: string;
}

const ChapterPointer: React.FC<Props> = (props) => {
  const pointerIsAtThisChapter = props.hashUrl.includes(props.chapterName);
  return pointerIsAtThisChapter ? (
    <div className="chapter-pointer">►</div>
  ) : null;
};

export default ChapterPointer;
