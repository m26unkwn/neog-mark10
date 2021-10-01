import React from "react";
import "./header.css";
export const Header = () => {
  return (
    <header>
      <div className='heading'>
        <h1>Cash Register Manager</h1>
      </div>
      <h3 style={{ marginTop: "1rem" }}>
        Enter the bill amount and cash given by the customer to know the minimum
        number of notes to return
      </h3>
    </header>
  );
};
