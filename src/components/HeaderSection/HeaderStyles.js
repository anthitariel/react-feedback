import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";
import yellow_s from "../../images/yellow_s.png";
import ellipse from "../../images/ellipse.png";

export const Nav = styled.nav`
  display: flex;
  margin: 0 auto;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  ${Container}
`;

export const NavLogo = styled(Link)`
  display: flex;
`;

export const NavIcon1 = styled.div`
  background-image: url(${yellow_s});
  background-repeat: no-repeat;
  height: 120px;
  width: 120px;
  margin-left: 30px;
  margin-top: 15px;

  @media screen and (max-width: 1200px) {
    margin-left: 5px;
  }
`;

export const NavIcon2 = styled.div`
  background-image: url(${ellipse});
  background-repeat: no-repeat;
  height: 120px;
  width: 120px;
  margin-top: 15px;
  position: absolute;
  left: 50%;
`;
