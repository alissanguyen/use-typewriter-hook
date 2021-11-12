import * as React from "react";

const MethodsTable: React.FC = () => {
  return (
    <div className="methods-table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Params</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>pause</td>
            <td>-</td>
            <td>Pause the typewriter effect on calling.</td>
          </tr>
          <tr>
            <td>start</td>
            <td>-</td>
            <td>Start the typewriter effect on calling.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MethodsTable;
