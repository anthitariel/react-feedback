import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon1,
  NavIcon2,
} from "./HeaderStyles";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon1 />
          </NavLogo>
          <NavIcon2 />
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
