import styled from "styled-components";
import pink_b from "../../images/pink_b.png";
import green_s from "../../images/green_s.png";
import yellow_s from "../../images/yellow_s.png";
import icon_f from "../../images/icon_f.png";
import icon_li from "../../images/icon_li.png";
import icon_pi from "../../images/icon_pi.png";
import icon_tw from "../../images/icon_tw.png";

export const FooterContainer = styled.div`
  display: flex;
  min-height: 200px;
  background-color: #fafafa;
  border-top: 2px solid #d8d8d8;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: auto;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const IconBox = styled.div`
  display: flex;
  height: 50px;
  margin-top: 80px;
  @media screen and (max-width: 1200px) {
    margin-left: 30px;
  }
`;

export const IconLink = styled.a`
  width: 30px;
`;

export const Linkedin = styled.div`
  background-image: url(${icon_li});
  background-repeat: no-repeat;
  height: 100%;
`;

export const Twitter = styled(Linkedin)`
  background-image: url(${icon_tw});
`;

export const Facebook = styled(Linkedin)`
  background-image: url(${icon_f});
`;

export const Pinterest = styled(Linkedin)`
  background-image: url(${icon_pi});
`;

export const FooterImage1 = styled.div`
  background-image: url(${pink_b});
  background-repeat: no-repeat;
  height: 200px;
  width: 300px;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const FooterImage2 = styled(FooterImage1)`
  background-image: url(${green_s});
  background-position-x: right;
  @media screen and (max-width: 1200px) {
    display: flex;
    visibility: visible;
  }
`;

export const FooterImage3 = styled(FooterImage1)`
  background-image: url(${yellow_s});
  background-position: 80% 80%;
  @media screen and (max-width: 1200px) {
    display: flex;
    visibility: visible;
  }
`;
