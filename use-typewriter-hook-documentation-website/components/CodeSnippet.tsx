import * as React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
  CSS: string;
  Code: string;
}

const CodeSnippet: React.FC<Props> = ({ CSS, Code }) => {
  const [activeTab, setActiveTab] = React.useState<'tsx' | 'css'>('tsx');

  return (
    <div className="code-snippet-container">
      <div className="code-snippet-tabs">
        <button
          onClick={() => setActiveTab('tsx')}
          className={`tab-button ${activeTab === 'tsx' ? 'tab-button-active' : ''}`}
        >
          TSX
        </button>
        {CSS && (
          <button
            onClick={() => setActiveTab('css')}
            className={`tab-button ${activeTab === 'css' ? 'tab-button-active' : ''}`}
          >
            CSS
          </button>
        )}
      </div>
      
      <div className="code-snippet-content">
        {activeTab === 'tsx' && (
          <SyntaxHighlighter
            language="typescript"
            style={coldarkDark}
            customStyle={{
              margin: 0,
              borderRadius: '0 0 6px 6px',
              fontSize: '14px'
            }}
          >
            {Code}
          </SyntaxHighlighter>
        )}
        
        {activeTab === 'css' && CSS && (
          <SyntaxHighlighter
            language="css"
            style={coldarkDark}
            customStyle={{
              margin: 0,
              borderRadius: '0 0 6px 6px',
              fontSize: '14px'
            }}
          >
            {CSS}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  );
};

export default CodeSnippet;
