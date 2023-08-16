import  GlobalStyles  from "../styles/GlobalStyles"
import {LogoName, DesktopNav,NavBG, DesktopNavLink, H1, NavMenu} from './Nav.styled.js';
import { Link } from "react-router-dom";


export default function Nav() {
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
                    Home
                  </DesktopNavLink>
                  <DesktopNavLink>
                    About
                  </DesktopNavLink>
                  <DesktopNavLink>
                    <Link to="Login">Login</Link>
                  </DesktopNavLink>
                </DesktopNav>
              </div>

              {/* Once this div is uncommented, creates issues */}
              {/* <div className='lg:hidden'></div> */}
          </NavMenu>
          {/* <ul>
            <li className='border-b-2 border-zinc-300 w-full p-4'>
                Home
            </li>
            <li className='border-b-2 border-zinc-300 w-full p-4'>
                About
            </li>
            <li className='border-b-2 border-zinc-300 w-full p-4'>
                New & Used Cars
            </li>
          </ul> */}
      </NavBG>
    </>
  )
}
