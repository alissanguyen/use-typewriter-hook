import * as React from 'react';

interface Props {
    chapterName: string;
    hashUrl: string;
    updateHash: (hash: string) => void;
}

const Chapter: React.FC<Props> = ({ chapterName, hashUrl, updateHash }) => {
    const handleClick = () => {
      updateHash(chapterName);
      const element = document.getElementById(chapterName);
      element?.scrollIntoView({ behavior: 'smooth' });
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