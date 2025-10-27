import { createContext, useState } from "react";

export const CounterContext = createContext({
  counter: 0,
  increment: () => {},
  decrement: () => {},
});

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(prev => prev + 1);
  const decrement = () => setCounter(prev => prev - 1);

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

