import * as React from 'react';

interface Props {
    hashUrl: string;
    subChapterHref: string;
    subChapterName: string;
}

const SubChapter: React.FC<Props> = ({ hashUrl, subChapterHref, subChapterName }) => {
    const handleClick = () => {
        const element = document.getElementById(subChapterHref);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const isActive = hashUrl === subChapterHref;

    return (
        <button
            onClick={handleClick}
            className={`nav-subchapter ${isActive ? 'nav-subchapter-active' : ''}`}
        >
            {subChapterName}
        </button>
    );
};

export default SubChapter