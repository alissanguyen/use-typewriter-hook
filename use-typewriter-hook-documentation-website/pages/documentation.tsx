import * as React from "react";
import AppName from "../components/AppName";
import BasicTypewriter from "../components/examples/BasicTypewriter";
import CustomCursorTypewriter from "../components/examples/CustomCursorTypewriter";
import CustomTypewriter from "../components/examples/CustomTypewriter";
import PartialBackspaceTypewriter from "../components/examples/PartialBackspaceTypewriter";
import TypewriterWithLoop from "../components/examples/TypewriterWithLoop";
import Footer from "../components/Footer";
import MethodsTable from "../components/MethodsTable";
import OptionsTable from "../components/OptionsTable";

const DocumentationPage: React.FC = () => {
  return (
    <div>
      <div className="documentation-page-upper-nav">
        <AppName />
      </div>
      <div className="documentation-page-content-wrapper">
        <nav className="navbar sticky-elements">
          <ul>
            <li>
              <a className="nav-link" href="#Introduction">
                Introduction
              </a>
            </li>
            <li>
              <a className="nav-link" href="#Installation">
                Installation
              </a>
            </li>
            <li>
              <a className="nav-link" href="#Options">
                Options
              </a>
            </li>
            <li>
              <a className="nav-link" href="#Methods">
                Methods (Functions)
              </a>
            </li>
            <li>
              <a className="nav-link" href="#Examples">
                Examples
              </a>
            </li>
          </ul>
        </nav>
        <main className="main-doc">
          <section className="main-section" id="Introduction">
            <header className="documentation-page-header-1">
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
          <section className="main-section" id="Installation">
            <header className="documentation-page-header-2">
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
              <pre className="installation-pre">yarn add use-typewriter-hook</pre>
            </article>
          </section>
          <section className="main-section" id="Options">
            <header className="documentation-page-header-3">Options</header>
            <article>
              <p>
                <strong>useTypewriter</strong> has these options built-in:
              </p>
              <OptionsTable />
            </article>
          </section>
          <section className="main-section" id="Methods">
            <header className="documentation-page-header-4">
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
          <section className="main-section" id="Examples">
            <header className="documentation-page-header-5">Examples</header>
            <article>
              <div className="documentation-example-single-wrapper">
                <h3>Basic Typewriter</h3>
                <BasicTypewriter />
              </div>
              <div className="documentation-example-single-wrapper">
                <h3>Typewriter with Custom Cursor</h3>
                <CustomCursorTypewriter />
              </div>
              <div className="documentation-example-single-wrapper">
                <h3>Custom Typewriter with Highlighted Text</h3>
                <CustomTypewriter />
              </div>
              <div className="documentation-example-single-wrapper">
                <h3>Typewriter with Looping Effect</h3>

                <TypewriterWithLoop />
              </div>
              <div className="documentation-example-single-wrapper">
                <h3>Typewriter with Backspacing Effect</h3>

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
