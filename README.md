# React useTypewriter

[![CircleCI](https://circleci.com/gh/tameemsafi/typewriterjs.svg?style=svg)](https://circleci.com/gh/tameemsafi/typewriterjs)

![](preview.gif)

[NPM Repository](https://npmjs.org/typewriter-effect)

## Installation

You can install React useTypewriter with one simple command

```shell

# with npm
npm i react-usetypewriter

# with yarn
yarn add react-usetypewriter

```

## Options

| Name              | Type               | Default value           | Description                                                        |
| ----------------- | ------------------ | ----------------------- | ------------------------------------------------------------------ |
| targetText        | String or String[] | "" (empty string)       | Strings to type out when using this tool.                          |
| autoStartDelay    | Number             | 100ms                   | Amout of milliseconds delay at the start of the typewriter effect. |
| typingDelayMillis | Number             | 100ms                   | The delay between each key when typing.                            |
| deleteSpeed       | Number             | 100ms                   | The delay between deleting each character.                         |
| loop              | Boolean            | false                   | Option to keep looping the targetText after finish.                |
| loopDelay         | Number             | 100                     | The delay between each loop (milliseconds).                        |
| wrapperClassName  | String             | 'use-typewriter-cursor' | Class name for the wrapper element.                                |
| cursorClassName   | String             | 'use-typewriter-cursor' | Class name for the cursor element.                                 |

## Methods (Functions)

All methods can be chained together.

| Name     | Params                                 | Description                                                   |
| -------- | -------------------------------------- | ------------------------------------------------------------- |
| pause    | -                                      | Pause the typewriter effect on calling.                       |
| start    | -                                      | Start the typewriter effect.                                  |
| pauseFor | `ms` Time in milliseconds to pause for | Pause the typewriter effect on calling for `ms` milliseconds. |

## Examples

### Basic example

```jsx
import * as React from "react";
import { useTypewriter } from "../useTypewriter";
import "./custom.css";

const BasicTypewriter: React.FC = () => {
  const targetText =
    "Welcome to React Typewriter. This is a basic typewriter. You can also display emojis, like this 😜🤩🥳😍!";
  const { textValue: typedText } = useTypewriter({
    targetText: targetText,
    autoStartDelay: 0,
    typingDelayMillis: 50,
  });

  return <div className="basic-typewriter">{typedText}</div>;
};

export default BasicTypewriter;

function App() {
  return (
    <div className="App">
      <div className="typewriter">
        <BasicTypewriter />
      </div>
    </div>
  );
}
```

https://user-images.githubusercontent.com/69443738/137083086-da4e8123-7371-49c1-b856-07cf21f9854f.mp4

### Custom cursor typewriter

```jsx
import * as React from "react";
import { useTypewriter } from "../useTypewriter";
import "./custom.css";

const CustomCursorTypewriter: React.FC = ({}) => {
  const targetText =
    "Welcome to React Typewriter. This is a typewriter with custom cursor (color).";
  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    autoStartDelay: 0,
    typingDelayMillis: 50,
  });
  return (
    //   Have to compose classNames to get all the css rules
    <div
      className={`${wrapperClassName} custom-cursor-typewriter`}
      id="custom-cursor-typewriter"
    >
      {typedText}
    </div>
  );
};

export default CustomCursorTypewriter;

function App() {
  return (
    <div className="App">
      <div className="typewriter">
        <CustomCursorTypewriter />
      </div>
    </div>
  );
}
```

https://user-images.githubusercontent.com/69443738/137083003-7ee00bcc-7df3-4bd1-b482-b76adeec1ee5.mp4

### Custom typewriter with highlight and colored text

```jsx
import * as React from "react";
import { useTypewriter } from "../useTypewriter";
import "./custom.css";

const CustomTypewriter: React.FC = () => {
  const targetText =
    "Welcome to React Typewriter. This is a custom typewriter, you can highlight different words.";

  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    autoStartDelay: 0,
    typingDelayMillis: 50,
  });

  /**
   * You can select as many words or phrases as you like to highlight/customize their color/bold
   * Here as an example, we select one phrase and one word to customize
   */
  const stringToSearch = "React Typewriter";
  const stringToSearch2 = "highlight";

  const startIndex1 = targetText.indexOf(stringToSearch);
  const endIndex1 = startIndex1 + stringToSearch.length;
  const startIndex2 = targetText.indexOf(stringToSearch2);
  const endIndex2 = startIndex2 + stringToSearch2.length;

  const fragments = splitTargetText(
    typedText,
    startIndex1,
    endIndex1,
    startIndex2,
    endIndex2
  );

  return (
    <div>
      <p className={wrapperClassName} id="custom-typewriter">
        {fragments}
      </p>
    </div>
  );
};

const splitTargetText = (
  str: string,
  startIndex1: number,
  endIndex1: number,
  startIndex2: number,
  endIndex2: number
): React.ReactNode[] => {
  /**
   * Return everything from 0...startIndex of str as a string,
   * return evevertying from startindex to endindex as a bolded span
   * return everything from endindex to str.length as a string
   */
  return [
    str.slice(0, startIndex1),
    <strong className="custom-typewriter-text">
      {str.slice(startIndex1, endIndex1)}
    </strong>,
    str.slice(endIndex1, startIndex2),
    <mark>{str.slice(startIndex2, endIndex2)}</mark>,
    str.slice(endIndex2, str.length),
  ];
};

export default CustomTypewriter;

function App() {
  return (
    <div className="App">
      <div className="typewriter">
        <CustomTypewriter />
      </div>
    </div>
  );
}
```

https://user-images.githubusercontent.com/69443738/137082907-6c6c411d-e90a-482d-ab92-080764b02d5c.mp4

### Typewriter with looping effect

```jsx
import * as React from "react";
import { useTypewriter } from "../useTypewriter";
import "./custom.css";

interface Props {}

const TypewriterWithLoop: React.FC<Props> = ({}) => {
  const targetText =
    "Welcome to React Typewriter. This is a typewriter with looping effect.";
  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    autoStartDelay: 0,
    typingDelayMillis: 50,
    loop: true,
  });
  return <div className={wrapperClassName}>{typedText}</div>;
};

export default TypewriterWithLoop;

function App() {
  return (
    <div className="App">
      <div className="typewriter">
        <TypewriterWithLoop />
      </div>
    </div>
  );
}
```

https://user-images.githubusercontent.com/69443738/137082838-19ebe1a7-efbd-483b-8e8b-484bb92dc8a6.mp4

## CSS file for styling for four examples above

```css
/* BASIC TYPEWRITER */
.basic-typewriter {
  font-family: "PT Mono", monospace;
  font-weight: 500;
  font-size: 2rem;
}

/* CUSTOM TYPEWRITER WITH BOLD, COLOR, AND HIGHLIGHT */
.custom-typewriter-text {
  color: rgb(46, 46, 206);
}

#custom-typewriter {
  font-family: "PT Mono", monospace;
  font-weight: 500;
  font-size: 2rem;
}

/* CUSTOM TYPEWRITER WITH CUSTOM COLOR CURSOR */
.custom-cursor-typewriter:after {
  border-right: 4px solid rgb(99, 238, 99);
}

.custom-cursor-typewriter {
  font-family: "PT Mono", monospace;
  font-weight: 500;
  font-size: 2rem;
}

/* TYPEWRITER WITH INFINITE LOOPING EFFECT */
.use-typewriter-cursor {
  font-family: "PT Mono", monospace;
  font-weight: 500;
  font-size: 2rem;
}
```
