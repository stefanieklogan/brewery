import React from 'react';
import "./style.css";
import Moment from 'react-moment';

function TableHtml({ format, headings, rows, handleClickChange }) {
  // let { format, headings, rows, click } = props;
  return (
    <div style={{ backgroundColor: "black" }}>
      <table className={`table ${format || "table-striped"}`} style={{ marginTop: "2%", marginRight: "2%", marginLeft: "2%", border: "black" }}>

        <thead>
          <tr style={{ color: "white", fontFamily: "Barlow", textTransform: "uppercase" }}>
            {headings.map(heading => {
              if (heading === "Name") {
                return <th key={heading} onClick={handleClickChange} scope="col">{heading}</th>
              }
              else { return <th key={heading} onClick={handleClickChange} scope="col">{heading}</th> }
            })
            }
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => {
            return <tr style={{ color: "white", fontFamily: "Red Hat Display" }} key={item.id}>
              <td style={{ color: "white" }}>
                <Moment format="MM-DD-YYYY">{item.date_created}</Moment>
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
    </div>
  );
}

export default TableHtml;