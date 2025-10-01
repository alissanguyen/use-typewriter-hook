import * as React from "react";

const OptionsTable: React.FC = () => {
  return (
    <div className="options-table-wrapper">
      <table className="options-table">
        <thead className="table-head">
          <tr className="table-head-row">
            <th className="first-column head">Name</th>
            <th className="second-column head">Type</th>
            <th className="third-column head">Default Value</th>
            <th className="fourth-column head">Description</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr className="first-row">
            <td className="first-column"><code>targetText</code></td>
            <td className="second-column">String or String[]</td>
            <td className="third-column">"" (empty string)</td>
            <td className="fourth-column">
              Strings to type out when using this tool.
            </td>
          </tr>
          <tr className="second-row">
            <td className="first-column"><code>autoStartDelay</code></td>
            <td className="second-column">Number</td>
            <td className="third-column">100ms</td>
            <td className="fourth-column">
              Amount of milliseconds delay at the start of the typewriter effect.
            </td>
          </tr>
          <tr className="third-row">
            <td className="first-column"><code>typingDelayMillis</code></td>
            <td className="second-column">Number</td>
            <td className="third-column">100ms</td>
            <td className="fourth-column">
              The delay between each key when typing.
            </td>
          </tr>
          <tr className="fourth-row">
            <td className="first-column"><code>loop</code></td>
            <td className="second-column">Boolean</td>
            <td className="third-column">false</td>
            <td className="fourth-column">
              Option to keep looping the targetText after finish.
            </td>
          </tr>
          <tr className="fifth-row">
            <td className="first-column"><code>loopDelay</code></td>
            <td className="second-column">Number</td>
            <td className="third-column">100ms</td>
            <td className="fourth-column">
              The delay between each loop (milliseconds).
            </td>
          </tr>
          <tr className="sixth-row">
            <td className="first-column"><code>wrapperClassName</code></td>
            <td className="second-column">String</td>
            <td className="third-column">'use-typewriter-cursor'</td>
            <td className="fourth-column">
              Class name for the wrapper element.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OptionsTable;
