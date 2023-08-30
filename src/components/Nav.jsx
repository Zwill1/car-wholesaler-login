import GlobalStyles from "../styles/GlobalStyles";
import {
  LogoName,
  DesktopNav,
  NavBG,
  DesktopNavLink,
  H1,
  NavMenu,
  IconDiv,
  MobileNavMenu,
} from "./Nav.styled.js";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import "../styles/Nav.css";

export default function Nav() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <>
      <GlobalStyles />
      <NavBG>
        <NavMenu>
          <div>
            <H1>
              <LogoName>
                <Link to="/">Car Dealership</Link>
              </LogoName>
            </H1>
          </div>
          <div>
            <DesktopNav>
              <DesktopNavLink>
                <Link to="/">Home</Link>
              </DesktopNavLink>
              <DesktopNavLink>
                <Link to="login">Login</Link>
              </DesktopNavLink>
            </DesktopNav>
          </div>

          {/* Once this div is uncommented, creates issues */}
          <IconDiv onClick={handleClick}>
            {!nav ? (
              <MenuIcon className="iconMenu" />
            ) : (
              <CloseIcon className="iconMenu" />
            )}
          </IconDiv>
        </NavMenu>
        <ul className={!nav ? "navHide" : "navMobile"}>
          <MobileNavMenu>
            <Link to="/" onClick={handleClose}>
              Home
            </Link>
          </MobileNavMenu>
          <MobileNavMenu>
            <Link to="login" onClick={handleClose}>
              Login
            </Link>
          </MobileNavMenu>
        </ul>
      </NavBG>
    </>
  );
}
