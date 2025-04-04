
import React, { createContext, useState } from "react";
import Cont1 from "./Cont1";
import MyRef from "./MyRef";
import Portal from "./Portal";

export const CountContext = createContext();

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <CountContext.Provider value={{ count, increment, decrement }}>
        <div>
          <h1>Count in App: {count}</h1>
          <Cont1 />
          <MyRef />
          <Portal />
        </div>
      </CountContext.Provider>
    </>
  );
};

export default App;
