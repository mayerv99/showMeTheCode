import { createContext, useState } from "react";

export const CalculateContext = createContext();

export default function CalculateProvider({ children }) {
  const [totalPrice, setTotalPrice] = useState([]);

  return (
    <CalculateContext.Provider value={{ totalPrice, setTotalPrice }}>
      {children}
    </CalculateContext.Provider>
  );
}
