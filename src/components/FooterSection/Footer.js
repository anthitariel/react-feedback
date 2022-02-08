import React from "react";
import {
  FooterContainer,
  FooterImage1,
  FooterImage2,
  FooterImage3,
  IconBox,
  Facebook,
  Linkedin,
  Pinterest,
  Twitter,
  IconLink,
} from "./FooterStyles";

const FooterSection = () => {
  return (
    <FooterContainer>
      <FooterImage1 />
      <IconBox>
        <IconLink href="https://facebook.com">
          <Facebook />
        </IconLink>
        <IconLink href="https://linkedin.com">
          <Linkedin />
        </IconLink>
        <IconLink href="https://pinterest.com">
          <Pinterest />
        </IconLink>
        <IconLink href="https://twitter.com">
          <Twitter />
        </IconLink>
      </IconBox>
      <FooterImage2 />
      <FooterImage3 />
    </FooterContainer>
  );
};

export default FooterSection;
