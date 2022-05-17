import React, { useEffect } from "react";

import { Wrapper } from "./styled";

import Form from "../../Form";

import CalculateProvider from "../../../Context/CalculateContext";

export default function CalculateSection() {
  return (
    <CalculateProvider>
      <Wrapper>
        <Form />
      </Wrapper>
    </CalculateProvider>
  );
}
