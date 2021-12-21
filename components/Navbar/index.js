import React from 'react';
import {Nav, NavbarContainer, NavLogo, NavMenu, NavLinks, NavItem} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';
const Navbar = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            Daniel Politis
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="links">Links</NavLinks>
            </NavItem>
          </NavMenu>

        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;