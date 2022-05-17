import React from "react";

import {
  Wrapper,
  TextDiv,
  ImageDiv,
  ButtonsWrapper,
  ServicesButton,
} from "./styled.jsx";

import CalculateButton from "../../CalculateButton/index";

function LandingPage() {
  return (
    <Wrapper>
      <TextDiv>
        <h3>Chamadas de longa distância nacional</h3>
        <h2>Qualidade &</h2>
        <h2>Transparência</h2>
        <ButtonsWrapper>
          <ServicesButton>Ver serviços</ServicesButton>
          <CalculateButton />
        </ButtonsWrapper>
      </TextDiv>
      <ImageDiv></ImageDiv>
    </Wrapper>
  );
}

export default LandingPage;
