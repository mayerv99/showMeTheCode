import React from "react";
import { Wrapper } from "./styled";

function Container({ children, backgroundColor, isFirst }) {
  return (
    <Wrapper backgroundColor={backgroundColor} isFirst={isFirst}>
      {children}
    </Wrapper>
  );
}
Container.defaultProps = { isFirst: false };
export default Container;
