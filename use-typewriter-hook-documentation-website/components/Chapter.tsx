import * as React from 'react';

interface Props {
    chapterName: string;
    hashUrl: string;
    updateHash: (hash: string) => void;
    closeMobileMenu: () => void;
}

const Chapter: React.FC<Props> = ({ chapterName, hashUrl, updateHash, closeMobileMenu }) => {
    const handleClick = () => {
        updateHash(chapterName);
        const element = document.getElementById(chapterName);
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