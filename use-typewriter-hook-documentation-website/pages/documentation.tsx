import * as React from "react";
import AppName from "../components/AppName";
import Chapter from "../components/Chapter";
import BasicTypewriter from "../components/examples/BasicTypewriter";
import CustomCursorTypewriter from "../components/examples/CustomCursorTypewriter";
import CustomTypewriter from "../components/examples/CustomTypewriter";
import PartialBackspaceTypewriter from "../components/examples/PartialBackspaceTypewriter";
import TypewriterWithLoop from "../components/examples/TypewriterWithLoop";
import Footer from "../components/Footer";
import MethodsTable from "../components/MethodsTable";
import OptionsTable from "../components/OptionsTable";
import SubChapter from "../components/SubChapter";

const DocumentationPage: React.FC = () => {
  const [chapterLocation, setChapterLocation] = React.useState<string>("");
  /**
   * Key value pair where the keys are the Ids of elements on this page.
   * And the numbers are the y-position
   */
  const chaptersRef = React.useRef<Record<string, number>>({});

  const updateElementInChaptersRef =
    (id: string) => (element: Element | null) => {
      if (element) {
        chaptersRef.current[id] = element.getBoundingClientRect().y;
      }
    };

  console.log(chaptersRef.current);

  React.useEffect(() => {
    if (chapterLocation === "") {
      history.pushState(null, "", "");
    } else {
      history.pushState(null, "", "#" + chapterLocation);
    }
  }, [chapterLocation]);

  /**
   * Convert the chaptersRef to an array of objects with the id of the chapter and the y position of the chapter, then sort highest y position first.
   */

  // Handle when hash changes
  React.useEffect(() => {
    const onHashChanged = () => {
      setChapterLocation(window.location.hash);
    };

    // Update hash on scroll
    window.addEventListener("scroll", () => {
      const chaptersArray = Object.entries(chaptersRef.current)
        .map(([key, value]) => {
          return {
            id: key,
            yPosition: value,
          };
        })
        .sort((a, b) => {
          return b.yPosition - a.yPosition;
        });

      const currentScrollPosition = window.scrollY;

      // TODO: Fix bug, find the smallest elements that is closest
      const elementThatIsClosest = chaptersArray.find(
        (chapter) => chapter.yPosition <= currentScrollPosition
      );

      if (!elementThatIsClosest) {
        return;
      }
      console.log("closetchapter" + elementThatIsClosest.id);
      setChapterLocation(elementThatIsClosest.id);
    });

    window.addEventListener("hashchange", onHashChanged);
    return () => {
      window.removeEventListener("hashchange", onHashChanged);
    };
  }, [chapterLocation]);

  return (
    <div>
      <div className="documentation-page-upper-nav">
        <AppName />
      </div>
      <div className="documentation-page-content-wrapper">
        <nav className="navbar">
          <ul className="navbar-menu">
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
              <Chapter
                chapterName="Examples"
                hashUrl={chapterLocation}
                updateHash={setChapterLocation}
              />
            </li>
            <ul className="Examples-Chapter-menu">
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
                  subChapterName="Custom Cursor Typewriter"
                />
              </li>
              <li>
                <SubChapter
                  hashUrl={chapterLocation}
                  subChapterHref="CustomTypewriter"
                  subChapterName="Custom Typewriter with Highlighted Text"
                />
              </li>
              <li>
                <SubChapter
                  hashUrl={chapterLocation}
                  subChapterHref="TypewriterWithLoop"
                  subChapterName="Typewriter with Loop"
                />
              </li>
              <li>
                <SubChapter
                  hashUrl={chapterLocation}
                  subChapterHref="BackspacingTypewriter"
                  subChapterName="Typewriter with Backspacing Effect"
                />
              </li>
            </ul>
          </ul>
        </nav>
        <main className="main-doc">
          <section className="main-section">
            <header
              className="documentation-page-header-1"
              id="Introduction"
              ref={updateElementInChaptersRef("Introduction")}
            >
              Introduction
            </header>
            <article>
              <p>
                <strong>useTypewriter</strong> is a flexible hook for creating
                typewriter-like experience with React. It has many features like
                loop-enabled and backspace options. Users can flexibly add
                functions to this hook for further applications.
              </p>
            </article>
          </section>
          <section className="main-section">
            <header
              className="documentation-page-header-2"
              id="Installation"
              ref={updateElementInChaptersRef("Installation")}
            >
              Installation
            </header>
            <article>
              <p>
                Here's how to get started with <strong>useTypewriter</strong>{" "}
                with one simple command:
              </p>
              <li>With npm</li>
              <pre className="installation-pre">npm i use-typewriter-hook</pre>
              <li>With yarn</li>
              <pre className="installation-pre">
                yarn add use-typewriter-hook
              </pre>
            </article>
          </section>
          <section className="main-section">
            <header
              className="documentation-page-header-3"
              id="Options"
              ref={updateElementInChaptersRef("Options")}
            >
              Options
            </header>
            <article>
              <p>
                <strong>useTypewriter</strong> has these options built-in:
              </p>
              <OptionsTable />
            </article>
          </section>
          <section className="main-section">
            <header
              className="documentation-page-header-4"
              id="Methods"
              ref={updateElementInChaptersRef("Methods")}
            >
              Methods (Functions)
            </header>
            <article>
              <p>
                <strong>useTypewriter</strong> has only a few simple methods
                (functions) and all methods can be chained together.
              </p>
              <MethodsTable />
            </article>
          </section>
          <section className="main-section">
            <header
              className="documentation-page-header-5"
              id="Examples"
              ref={updateElementInChaptersRef("Examples")}
            >
              Examples
            </header>
            <article>
              <div className="documentation-example-single-wrapper">
                <h3
                  id="BasicTypewriterExample"
                  ref={updateElementInChaptersRef("BasicTypewriterExample")}
                >
                  Basic Typewriter
                </h3>
                <BasicTypewriter />
              </div>
              <div className="documentation-example-single-wrapper">
                <h3
                  id="CustomCursorTypewriter"
                  ref={updateElementInChaptersRef("CustomCursorTypewriter")}
                >
                  Typewriter with Custom Cursor
                </h3>
                <CustomCursorTypewriter />
              </div>
              <div className="documentation-example-single-wrapper">
                <h3
                  id="CustomTypewriter"
                  ref={updateElementInChaptersRef("CustomTypewriter")}
                >
                  Custom Typewriter with Highlighted Text
                </h3>
                <CustomTypewriter />
              </div>
              <div className="documentation-example-single-wrapper">
                <h3
                  id="TypewriterWithLoop"
                  ref={updateElementInChaptersRef("TypewriterWithLoop")}
                >
                  Typewriter with Looping Effect
                </h3>

                <TypewriterWithLoop />
              </div>
              <div className="documentation-example-single-wrapper">
                <h3
                  id="BackspacingTypewriter"
                  ref={updateElementInChaptersRef("BackspacingTypewriter")}
                >
                  Typewriter with Backspacing Effect
                </h3>
                <PartialBackspaceTypewriter />
              </div>
            </article>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DocumentationPage;
