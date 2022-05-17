import React, { useEffect, useRef, useState } from "react";
import AnimatedSelect from "./components/animatedSelect";
import { getOptions, getDestinations, getResults } from "../../services/form";

import { phoneOptionsAdapter } from "../../utils/adapters";
import { Wrapper } from "./styled";

function Form({ setPrices }) {
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
    return setDestinationOptions(phoneOptionsAdapter(res));
  };

  const handleCalculate = async () => {
    const dataToSend = {
      origin: origin.id,
      destination: destination.id,
      time: timeRef.current.value,
    };
    const result = await getResults(dataToSend);

    return setPrices(result);
  };

  useEffect(() => {
    getDestinationsOptions();
  }, [origin]);

  useEffect(() => {
    getOriginsOptions();
  }, []);

  return (
    <Wrapper>
      <AnimatedSelect
        options={originsOptions || []}
        placeholder="Insira a origem"
        value={origin}
        onChange={(event) => setOrigin(event.value)}
        className="select"
      />

      <AnimatedSelect
        options={destinationsOptions || []}
        placeholder="Insira o destino"
        value={destination}
        onChange={(event) => setDestination(event.value)}
        className="select"
      />
      <input
        placeholder="Insira o tempo em minutos"
        type="number"
        ref={timeRef}
      />
      <button onClick={handleCalculate}>Calcular</button>
    </Wrapper>
  );
}

export default Form;
