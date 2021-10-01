import React from "react";

export const Result = (props) => {
  const Result = props.cash - props.bill;
  const notes = [2000, 500, 100, 20, 10, 5, 1];
  const noChange = [];

  const noOfNotes = (result) => {
    for (let i = 0; i < notes.length; i++) {
      let noNotes = Math.trunc(result / notes[i]);
      console.log(notes[i] + " rupee notes:", noNotes);
      noChange.push(noNotes);
      result = result % notes[i];
    }
  };
  noOfNotes(Result);
  return (
    <>
      <p>Returned Amount: {Result}</p>
      <table id='change-table'>
        <tbody>
          <tr>
            <th>No. of Notes</th>
            {noChange.map((data) => (
              <td key={data}>{data}</td>
            ))}
          </tr>
          <tr>
            <th>Note</th>
            <td>2000</td>
            <td>500</td>
            <td>100</td>
            <td>20</td>
            <td>10</td>
            <td>5</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
