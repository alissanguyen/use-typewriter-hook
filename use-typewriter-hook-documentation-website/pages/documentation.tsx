import * as React from "react";
import BasicTypewriter from "../components/examples/BasicTypewriter";
import CustomCursorTypewriter from "../components/examples/CustomCursorTypewriter";
import CustomTypewriter from "../components/examples/CustomTypewriter";
import PartialBackspaceTypewriter from "../components/examples/PartialBackspaceTypewriter";
import TypewriterWithLoop from "../components/examples/TypewriterWithLoop";
import MethodsTable from "../components/MethodsTable";
import OptionsTable from "../components/OptionsTable";

const DocumentationPage: React.FC = () => {
  return (
    <div>
      <nav id="navbar">
        <header>useTypewriter</header>
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
      <main id="main-doc">
        <section className="main-section" id="Introduction">
          <header>Introduction</header>
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
          <header>Installation</header>
          <article>
            <p>Here's how to get started with useTypewriter:</p>
            <ul>
              {" "}
              You can install React useTypewriter with one simple command
              <li>With npm</li>
              <pre>npm i use-typewriter-hook</pre>
              <li>With yarn</li>
              <pre>yarn add use-typewriter-hook</pre>
            </ul>
          </article>
        </section>
        <section className="main-section" id="Options">
          <header>Options</header>
          <article>
            <p>useTypewriter has these options built-in:</p>
            <OptionsTable />
          </article>
        </section>
        <section className="main-section" id="Methods">
          <header>Methods (Functions)</header>
          <article>
            useTypewriter has only a few simple methods (functions) and all
            methods can be chained together.
          </article>
          <MethodsTable />
        </section>
        <section className="main-section" id="Examples">
          <header>Examples</header>
          <div className="documentation-example-single-wrapper">
            <h3>Basic Typewriter</h3>
            <div className="example-typewriter-wrapper">
              <BasicTypewriter />
            </div>
          </div>
          <div className="documentation-example-single-wrapper">
            <h3>Typewriter with Custom Cursor</h3>
            <div className="example-typewriter-wrapper">
              <CustomCursorTypewriter />
            </div>
          </div>
          <div className="documentation-example-single-wrapper">
            <h3>Custom Typewriter with Highlighted Text</h3>
            <div className="example-typewriter-wrapper">
              <CustomTypewriter />
            </div>
          </div>
          <div className="documentation-example-single-wrapper">
            <h3>Typewriter with Looping Effect</h3>
            <div className="example-typewriter-wrapper">
              <TypewriterWithLoop />
            </div>
          </div>
          <div className="documentation-example-single-wrapper">
            <h3>Typewriter with Backspacing Effect</h3>
            <div className="example-typewriter-wrapper">
              <PartialBackspaceTypewriter />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DocumentationPage;
