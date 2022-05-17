import React from "react";

import Card from "../../Card";

import { Wrapper, Header, CardsWrapper } from "./styled";

import faleMais30 from "../../../assets/faleMais30.svg";
import faleMais60 from "../../../assets/faleMais60.svg";
import faleMais120 from "../../../assets/faleMais120.svg";

export default function ServicesSection() {
  const cardsData = [
    {
      title: faleMais30,
      origin: "011",
      destination: "016",
      pricePerMin: 1.9,
      text: "Com o plano faleMais30, você fala por até 30 minutos sem pagar nada!",
      freeTime: 30,
    },
    {
      title: faleMais60,
      origin: "011",
      destination: "016",
      pricePerMin: 1.9,
      text: "Com o plano faleMais60, você fala por até 60 minutos sem pagar nada!",
      freeTime: 60,
    },
    {
      title: faleMais120,
      origin: "011",
      destination: "016",
      pricePerMin: 1.9,
      text: "Com o plano faleMais120, você fala por até 120 minutos sem pagar nada!",
      freeTime: 120,
    },
  ];
  return (
    <Wrapper>
      <Header>
        <h3>Planos FaleMais</h3>
        <h2>Planos de qualidade para</h2>
        <h2>você e sua família</h2>
      </Header>
      <CardsWrapper>
        {cardsData.map((data, index) => (
          <Card planData={data} key={index} />
        ))}
      </CardsWrapper>
    </Wrapper>
  );
}
