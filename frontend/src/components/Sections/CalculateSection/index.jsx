import React, { useEffect, useState } from "react";

import { CardsWrapper, Wrapper } from "./styled";

import Form from "../../Form";
import ResultsCard from "../../ResultsCard/index";

import faleMais30 from "../../../assets/faleMais30.svg";
import faleMais60 from "../../../assets/faleMais60.svg";
import faleMais120 from "../../../assets/faleMais120.svg";

export default function CalculateSection() {
  const [prices, setPrices] = useState();
  const [cardsData, setCardsData] = useState();

  useEffect(() => {
    if (prices) {
      const dataToRender = [
        { plan: faleMais30, value: prices.plan30.toFixed(2) },
        { plan: faleMais60, value: prices.plan60.toFixed(2) },
        { plan: faleMais120, value: prices.plan120.toFixed(2) },
      ];
      setCardsData(dataToRender);
    }
  }, [prices]);

  return (
    <Wrapper>
      <Form setPrices={setPrices} />
      {prices && (
        <h2>
          Valor sem plano: <strong>R$ {prices.withoutPlan.toFixed(2)}</strong>{" "}
        </h2>
      )}
      {cardsData && (
        <CardsWrapper>
          {cardsData.map((data) => (
            <ResultsCard data={data} />
          ))}
        </CardsWrapper>
      )}
    </Wrapper>
  );
}
