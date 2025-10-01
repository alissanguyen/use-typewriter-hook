import * as React from 'react';

interface Props {
    chapterName: string;
    hashUrl: string;
    closeMobileMenu: () => void;
    onNavClick: (chapterName: string) => void;
}

const Chapter: React.FC<Props> = ({ chapterName, hashUrl, onNavClick, closeMobileMenu }) => {
    const handleClick = () => {
        onNavClick(chapterName);
        closeMobileMenu();
    };

    const isActive = hashUrl === chapterName;

    return (
        <button
            onClick={handleClick}
            className={`nav-chapter ${isActive ? 'nav-chapter-active' : ''}`}
        >
            {chapterName}
        </button>
    );
};

export default Chapter