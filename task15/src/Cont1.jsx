// Cont1.jsx
import React, { useContext } from "react";
import { CountContext } from "./App";

const Cont1 = () => {
  const { count, increment, decrement } = useContext(CountContext);

  return (
    <div>
      <h2>Count in Cont1: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Cont1;

