import React, { useEffect, useRef, useState } from "react";
import AnimatedSelect from "./components/animatedSelect";
import { getOptions, getDestinations, getResults } from "../../services/form";

import { phoneOptionsAdapter } from "../../utils/adapters";

function Form() {
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [originsOptions, setOriginsOptions] = useState();
  const [destinationsOptions, setDestinationOptions] = useState();

  const timeRef = useRef("");

  const getOriginsOptions = async () => {
    const res = await getOptions();
    return setOriginsOptions(phoneOptionsAdapter(res));
  };

  const getDestinationsOptions = async () => {
    const res = await getDestinations(origin);
    console.log(res);
    return setDestinationOptions(phoneOptionsAdapter(res));
  };

  const handleCalculate = async () => {
    const dataToSend = {
      origin: origin.id,
      destination: destination.id,
      time: timeRef.current.value,
    };
    const result = await getResults(dataToSend);
    console.log(result);
  };

  useEffect(() => {
    getDestinationsOptions();
  }, [origin]);

  useEffect(() => {
    getOriginsOptions();
  }, []);

  return (
    <div>
      <AnimatedSelect
        options={originsOptions || []}
        placeholder="Insira a origem"
        value={origin}
        onChange={(event) => setOrigin(event.value)}
      />
      <AnimatedSelect
        options={destinationsOptions || []}
        placeholder="Insira a origem"
        value={destination}
        onChange={(event) => setDestination(event.value)}
      />
      <input type="number" ref={timeRef} />
      <button onClick={handleCalculate}>Calcular</button>
    </div>
  );
}

export default Form;
