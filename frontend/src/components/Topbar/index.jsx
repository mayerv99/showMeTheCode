import React from "react";

import CalculateButton from "../CalculateButton";

import { Wrapper, ButtonsWrapper } from "./styled";

function Topbar() {
  return (
    <Wrapper>
      <h1>Telzir</h1>
      <ButtonsWrapper>
        <CalculateButton />
      </ButtonsWrapper>
    </Wrapper>
  );
}

export default Topbar;
