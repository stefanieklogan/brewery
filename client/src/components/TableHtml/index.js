import React from 'react';
import "./style.css";

function TableHtml (props)  {
    // let { format, headings, rows, click } = props;
  let { format, headings, row, id } = props;
  return (
        <table className={`table ${format || "table-striped"}`}>
        <thead>
          <tr>
            {headings.map(heading => {if(heading==="Name") {
            // return <th scope="col" onClick={click}>{heading}</th>
            return <th key={heading} scope="col">{heading}</th>
            }
            else {return <th key={heading} scope="col">{heading}</th>}})
          }
          </tr>
        </thead>
        <tbody>      
          {row.map((item) => (
            <tr key={item.name}>
              <td key={id}>
              {item.name}
              </td>
              </tr>
          )
          )}
        </tbody>
      </table>
  );
}

export default TableHtml;