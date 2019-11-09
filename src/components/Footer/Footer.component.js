import React from "react";
import * as $D from "../../constants/dimensions";
import Wrapper from "../../components/Wrapper";

const Footer = () => (
  <Wrapper background={"BLUE_GRADIENT"}>
    <Wrapper className={"section"} minHeight={$D.FOOTER_SIZE}>
      Footer
    </Wrapper>
  </Wrapper>
);

export default Footer;
