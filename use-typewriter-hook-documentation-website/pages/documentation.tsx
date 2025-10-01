import * as React from "react";
import AppName from "../components/AppName";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import BasicTypewriter from "../components/examples/BasicTypewriter";
import CustomCursorTypewriter from "../components/examples/CustomCursorTypewriter";
import CustomTypewriter from "../components/examples/CustomTypewriter";
import PartialBackspaceTypewriter from "../components/examples/PartialBackspaceTypewriter";
import TypewriterWithLoop from "../components/examples/TypewriterWithLoop";
import Footer from "../components/Footer";
import MethodsTable from "../components/MethodsTable";
import OptionsTable from "../components/OptionsTable";
import Chapter from "../components/Chapter";
import SubChapter from "../components/SubChapter";

const DocumentationPage: React.FC = () => {
  const [chapterLocation, setChapterLocation] = React.useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isExamplesExpanded, setIsExamplesExpanded] = React.useState(true);
  const chaptersRef = React.useRef<Record<string, number>>({});

  const updateElementInChaptersRef =
    (id: string) => (element: Element | null) => {
      if (element) {
        chaptersRef.current[id] = element.getBoundingClientRect().y;
      }
    };

  React.useEffect(() => {
    if (chapterLocation === "") {
      history.pushState(null, "", "");
    } else {
      history.pushState(null, "", "#" + chapterLocation);
    }
  }, [chapterLocation]);

  React.useEffect(() => {
    const onHashChanged = () => {
      setChapterLocation(window.location.hash.replace('#', ''));
    };

    const handleScroll = () => {
      const chaptersArray = Object.entries(chaptersRef.current)
        .map(([key, value]) => ({
          id: key,
          yPosition: value,
        }))
        .sort((a, b) => b.yPosition - a.yPosition);

      const currentScrollPosition = window.scrollY + 100;

      const elementThatIsClosest = chaptersArray.find(
        (chapter) => chapter.yPosition <= currentScrollPosition
      );

      if (elementThatIsClosest && elementThatIsClosest.id !== chapterLocation) {
        setChapterLocation(elementThatIsClosest.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", onHashChanged);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", onHashChanged);
    };
  }, [chapterLocation]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="documentation-page">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-inner">
            <AppName />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-button"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div className="page-content">
        <div className="content-wrapper">
          {/* Sidebar Navigation */}
          <nav className={`sidebar ${isMobileMenuOpen ? 'sidebar-open' : ''}`}>
            <div className="sidebar-content">
              <ul className="nav-list">
                <li>
                  <Chapter
                    chapterName="Introduction"
                    hashUrl={chapterLocation}
                    updateHash={setChapterLocation}
                  />
                </li>
                <li>
                  <Chapter
                    chapterName="Installation"
                    hashUrl={chapterLocation}
                    updateHash={setChapterLocation}
                  />
                </li>
                <li>
                  <Chapter
                    chapterName="Options"
                    hashUrl={chapterLocation}
                    updateHash={setChapterLocation}
                  />
                </li>
                <li>
                  <Chapter
                    chapterName="Methods"
                    hashUrl={chapterLocation}
                    updateHash={setChapterLocation}
                  />
                </li>
                <li>
                  <div>
                    <button
                      onClick={() => setIsExamplesExpanded(!isExamplesExpanded)}
                      className="nav-chapter nav-expandable"
                    >
                      <span>Examples</span>
                      {isExamplesExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    </button>
                    
                    {isExamplesExpanded && (
                      <ul className="nav-sublist">
                        <li>
                          <SubChapter
                            hashUrl={chapterLocation}
                            subChapterHref="BasicTypewriterExample"
                            subChapterName="Basic Typewriter"
                          />
                        </li>
                        <li>
                          <SubChapter
                            hashUrl={chapterLocation}
                            subChapterHref="CustomCursorTypewriter"
                            subChapterName="Custom Cursor"
                          />
                        </li>
                        <li>
                          <SubChapter
                            hashUrl={chapterLocation}
                            subChapterHref="CustomTypewriter"
                            subChapterName="Highlighted Text"
                          />
                        </li>
                        <li>
                          <SubChapter
                            hashUrl={chapterLocation}
                            subChapterHref="TypewriterWithLoop"
                            subChapterName="Looping Effect"
                          />
                        </li>
                        <li>
                          <SubChapter
                            hashUrl={chapterLocation}
                            subChapterHref="BackspacingTypewriter"
                            subChapterName="Backspace Effect"
                          />
                        </li>
                      </ul>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          {/* Mobile overlay */}
          {isMobileMenuOpen && (
            <div 
              className="mobile-overlay"
              onClick={closeMobileMenu}
            />
          )}

          {/* Main Content */}
          <main className="main-content">
            <div className="main-inner">
              {/* Introduction */}
              <section className="content-section">
                <h1
                  className="main-heading"
                  id="Introduction"
                  ref={updateElementInChaptersRef("Introduction")}
                >
                  Introduction
                </h1>
                <div className="prose">
                  <p>
                    <strong>useTypewriter</strong> is a flexible hook for creating
                    typewriter-like experience with React. It has many features like
                    loop-enabled and backspace options. Users can flexibly add
                    functions to this hook for further applications.
                  </p>
                </div>
              </section>

              {/* Installation */}
              <section className="content-section">
                <h2
                  className="section-heading"
                  id="Installation"
                  ref={updateElementInChaptersRef("Installation")}
                >
                  Installation
                </h2>
                <div className="prose">
                  <p>
                    Here's how to get started with <strong>useTypewriter</strong>{" "}
                    with one simple command:
                  </p>
                  
                  <div className="install-commands">
                    <div className="install-option">
                      <p className="install-label">With npm:</p>
                      <pre className="install-code">npm i use-typewriter-hook</pre>
                    </div>
                    
                    <div className="install-option">
                      <p className="install-label">With yarn:</p>
                      <pre className="install-code">yarn add use-typewriter-hook</pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Options */}
              <section className="content-section">
                <h2
                  className="section-heading"
                  id="Options"
                  ref={updateElementInChaptersRef("Options")}
                >
                  Options
                </h2>
                <div className="prose">
                  <p>
                    <strong>useTypewriter</strong> has these options built-in:
                  </p>
                  <OptionsTable />
                </div>
              </section>

              {/* Methods */}
              <section className="content-section">
                <h2
                  className="section-heading"
                  id="Methods"
                  ref={updateElementInChaptersRef("Methods")}
                >
                  Methods (Functions)
                </h2>
                <div className="prose">
                  <p>
                    <strong>useTypewriter</strong> has only a few simple methods
                    (functions) and all methods can be chained together.
                  </p>
                  <MethodsTable />
                </div>
              </section>

              {/* Examples */}
              <section className="content-section">
                <h2
                  className="section-heading"
                  id="Examples"
                  ref={updateElementInChaptersRef("Examples")}
                >
                  Examples
                </h2>
                
                <div className="examples-grid">
                  <div className="example-item">
                    <h3
                      className="example-heading"
                      id="BasicTypewriterExample"
                      ref={updateElementInChaptersRef("BasicTypewriterExample")}
                    >
                      Basic Typewriter
                    </h3>
                    <BasicTypewriter />
                  </div>

                  <div className="example-item">
                    <h3
                      className="example-heading"
                      id="CustomCursorTypewriter"
                      ref={updateElementInChaptersRef("CustomCursorTypewriter")}
                    >
                      Typewriter with Custom Cursor
                    </h3>
                    <CustomCursorTypewriter />
                  </div>

                  <div className="example-item">
                    <h3
                      className="example-heading"
                      id="CustomTypewriter"
                      ref={updateElementInChaptersRef("CustomTypewriter")}
                    >
                      Custom Typewriter with Highlighted Text
                    </h3>
                    <CustomTypewriter />
                  </div>

                  <div className="example-item">
                    <h3
                      className="example-heading"
                      id="TypewriterWithLoop"
                      ref={updateElementInChaptersRef("TypewriterWithLoop")}
                    >
                      Typewriter with Looping Effect
                    </h3>
                    <TypewriterWithLoop />
                  </div>

                  <div className="example-item">
                    <h3
                      className="example-heading"
                      id="BackspacingTypewriter"
                      ref={updateElementInChaptersRef("BackspacingTypewriter")}
                    >
                      Typewriter with Backspacing Effect
                    </h3>
                    <PartialBackspaceTypewriter />
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DocumentationPage;
