import React, { useState } from "react";
import "./input.css";
import { Result } from "./Result";

export const InputValue = () => {
  const [amount, setAmount] = useState(0);
  const [cash, setCash] = useState(0);
  const [status, setStatus] = useState(false);

  console.log(Number(amount) > 0 && Number(cash) > Number(amount));
  const clickHandler = () => {
    if (status === true) setStatus(status);
    else {
      setStatus(!status);
    }
  };
  return (
    <div className='bill-amount'>
      <h2 className='input-heading'>Bill Amount</h2>
      <input
        id='input-value'
        type='number'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      {amount > 0 ? (
        <>
          <h2 className='input-heading'>Cash Given</h2>
          <input
            id='input-value'
            type='number'
            value={cash}
            onChange={(e) => setCash(e.target.value)}
          />
        </>
      ) : (
        <p>Enter Bill Amount to see Cash Input</p>
      )}
      {Number(amount) > 0 && Number(cash) >= Number(amount) ? (
        <button className='checkBtn' onClick={clickHandler}>
          Check
        </button>
      ) : cash ? (
        <p>Cash Amount Should be {">="} to the bill Amount </p>
      ) : (
        ""
      )}

      {status ? <Result bill={amount} cash={cash} /> : ""}
    </div>
  );
};
