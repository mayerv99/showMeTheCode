import React from "react";

import { Wrapper, Header, Content, Footer } from "./styled";

export default function Card({ data }) {
  return (
    <Wrapper>
      <Header>{data.plan && <img src={data.plan} />}</Header>
      <Content>
        <div>
          Valor total da ligação: <strong>R$ {data.value}</strong>
        </div>
      </Content>
      <Footer>{data?.footer}</Footer>
    </Wrapper>
  );
}
