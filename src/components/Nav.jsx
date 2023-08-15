import { GlobalStyles } from "@mui/material"
import {LogoName, DesktopNav,NavBG, DesktopNavLink, H1, NavMenu} from './Nav.styled.js';


export default function Nav() {
  return (
    <>
      <GlobalStyles />
      <NavBG>
          <NavMenu>
              <div>
                  <H1>
                    <LogoName>Car Dealership</LogoName>
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
                    New & Used Cars
                  </DesktopNavLink>
                </DesktopNav>
              </div>
              <div className='lg:hidden'></div>
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
