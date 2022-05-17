import React from "react";

import { Wrapper, Header, Content, Footer } from "./styled";

export default function Card({ planData }) {
  return (
    <Wrapper>
      <Header>
        <img src={planData.title} />
      </Header>
      <Content>
        <div>{planData.text}</div>
      </Content>
      <Footer>
        <button>Assine já</button>
      </Footer>
    </Wrapper>
  );
}
