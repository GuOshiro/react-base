import React, { useState } from "react";
import { Nav } from "./Header.styles";
import Button from "../Buttons";
import Wrapper from "../Wrapper";
import HeaderMobile from "../HeaderMobile";
import MenuLateral from "../HeaderMobile/HeaderMobile.Lateral.component";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState();
  return (
    <>
      <Nav>
        <div className="header-desktop">
          <Wrapper alignItems="center" display="flex" justifyContent="center">
            <Wrapper display="flex">
              <Button
                type="text"
                onClick={() => history.push("/home")}
                label="Home"
              />
            </Wrapper>
          </Wrapper>
        </div>
        <div className="header-mobile">
          <HeaderMobile showMenu={() => setShowMenu(!showMenu)} />
        </div>
        <MenuLateral
          openMenu={showMenu}
          closeMenu={() => setShowMenu(!showMenu)}
        />
      </Nav>
    </>
  );
};

export default Header;
