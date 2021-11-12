import * as React from "react";

const OptionsTable: React.FC = () => {
  return (
    <div className="options-table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>targetText</td>
            <td>String or String[]</td>
            <td>"" (empty string)</td>
            <td>Strings to type out when using this tool.</td>
          </tr>
          <tr>
            <td>autoStartDelay</td>
            <td>Number</td>
            <td>100ms</td>
            <td>
              Amout of milliseconds delay at the start of the typewriter effect.
            </td>
          </tr>
          <tr>
            <td>typingDelayMillis</td>
            <td>Number</td>
            <td>100ms</td>
            <td>The delay between each key when typing.</td>
          </tr>
          <tr>
            <td>loop</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Option to keep looping the targetText after finish.</td>
          </tr>
          <tr>
            <td>loopDelay</td>
            <td>Number</td>
            <td>100ms</td>
            <td>The delay between each loop (milliseconds).</td>
          </tr>
          <tr>
            <td>wrapperClassName</td>
            <td>String</td>
            <td>'use-typewriter-cursor'</td>
            <td>Class name for the wrapper element.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OptionsTable;
