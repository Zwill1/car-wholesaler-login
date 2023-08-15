import { styled } from "styled-components"


export const NavMenu = styled.div`
display: flex; 
justify-content: space-between; 
align-items: center; 
width: 83.333333%; 
height: 3.5rem; 
margin: 0 auto;
/* width: 100%; */

@media (max-width: 768px) {
    width: 100%;
  }
`

export const H1 = styled.h1`
display: flex;
`

export const LogoName = styled.a`
font-weight: 700;
margin-right: 1rem;
font-size: 1.5rem;
line-height: 2rem;
text-transform: uppercase;
color: #000;

@media (min-width: 640px) {
	font-size: 1.875rem;
    line-height: 2.25rem;
  }

@media (min-width: 768px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
}
`
export const DesktopNav = styled.ul `
display: none;
padding-right: 1rem;

@media (min-width: 1024px) {
    display: flex;
  }
` 

export const DesktopNavLink = styled.li `
	padding: 1rem;
    font-weight: bold;
    list-style-type: none;

    &:hover {
        color: red;
    }
`

export const NavBG = styled.section `
    background-color: #fff;
    color: #000;
`