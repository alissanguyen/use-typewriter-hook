import * as React from 'react';

interface Props {
    hashUrl: string;
    subChapterHref: string;
    subChapterName: string;
    closeMobileMenu: () => void;
    onNavClick: (chapterName: string) => void;
}

const SubChapter: React.FC<Props> = ({ hashUrl, subChapterHref, subChapterName, closeMobileMenu, onNavClick }) => {
    const handleClick = () => {
        onNavClick(subChapterHref);
        closeMobileMenu();
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