import React from 'react';
import "./style.css";

function TableHtml({ format, headings, rows }) {
  // let { format, headings, rows, click } = props;
  return (
    <table className={`table ${format || "table-striped"}`}>
      <thead>
        <tr>
          {headings.map(heading => {
            if (heading === "Name") {
              // return <th scope="col" onClick={click}>{heading}</th>
              return <th key={heading} scope="col">{heading}</th>
            }
            else { return <th key={heading} scope="col">{heading}</th> }
          })
          }
        </tr>
      </thead>
      <tbody>
        {rows.map((item) => {
          return <tr key={item.id}>
            <td>
              {item.date_created}
            </td>
            <td>
              {item.name}
            </td>
            <td>
              {item.email}
            </td>
            <td>
              {item.checkbox ? "Yes" : "No"}
            </td>
            <td>
              {item.feedback}
            </td>
          </tr>
        }
        )}
      </tbody>
    </table>
  );
}

export default TableHtml;