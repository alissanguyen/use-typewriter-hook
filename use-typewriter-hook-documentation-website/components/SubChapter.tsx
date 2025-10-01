import * as React from 'react';

interface Props {
    hashUrl: string;
    subChapterHref: string;
    subChapterName: string;
    closeMobileMenu: () => void;
}

const SubChapter: React.FC<Props> = ({ hashUrl, subChapterHref, subChapterName, closeMobileMenu }) => {
    const handleClick = () => {
        const element = document.getElementById(subChapterHref);
        if (element) {
            const headerHeight = 120; // Account for sticky header + some padding
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
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