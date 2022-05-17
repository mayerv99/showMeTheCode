import { useContext } from "react";
import CalculateContext from "../Context/CalculateContext";

function useCalculate() {
  const { totalPrice, setTotalPrice } = useContext(CalculateContext);
  return { totalPrice, setTotalPrice };
}

export default useCalculate;
