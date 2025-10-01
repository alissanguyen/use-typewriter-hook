import * as React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';

interface Props {
  CSS: string;
  Code: string;
}

const CodeSnippet: React.FC<Props> = ({ CSS, Code }) => {
  const [activeTab, setActiveTab] = React.useState<'tsx' | 'css'>('tsx');
  const [copiedTab, setCopiedTab] = React.useState<'tsx' | 'css' | null>(null);

  const copyToClipboard = async (text: string, tab: 'tsx' | 'css') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedTab(tab);
      setTimeout(() => setCopiedTab(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="code-snippet-container">
      <div className="code-snippet-tabs">

        <div className="tab-buttons-group">
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
        <button
          onClick={() => copyToClipboard(activeTab === 'tsx' ? Code : CSS || '', activeTab)}
          className="copy-button"
          title="Copy code"
        >
          {copiedTab === activeTab ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>

      <div className="code-snippet-content">
        {activeTab === 'tsx' && (
          <SyntaxHighlighter
            language="typescript"
            style={codeStyle}
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
            style={codeStyle}
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
