import * as React from "react";

const MethodsTable: React.FC = () => {
  return (
    <div className="methods-table-wrapper">
      <table className="methods-table">
        <thead className="table-head">
          <tr className="table-head-row">
            <th className="first-column head">Name</th>
            <th className="second-column head">Params</th>
            <th className="third-column head">Description</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr className="first-row">
            <td className="first-column"><code>pause</code></td>
            <td className="second-column">-</td>
            <td className="third-column">
              Pause the typewriter effect on calling.
            </td>
          </tr>
          <tr className="second-row">
            <td className="first-column"><code>start</code></td>
            <td className="second-column">-</td>
            <td className="third-column">
              Start the typewriter effect on calling.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MethodsTable;
