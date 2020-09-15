import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
      color={props.colourMode === 'Light' ? 'dark' : 'light'}
      light={true}
      expand="md"
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 99,
        boxShadow: '0 0 20px 0px rgba(0, 0, 0, 0.3)'
      }}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#about" onClick={() => props.changeComponent(1)}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#tech" onClick={() => props.changeComponent(2)}>Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects" onClick={() => props.changeComponent(3)}>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#current" onClick={() => props.changeComponent(4)}>Current Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact" onClick={() => props.changeComponent(5)}>Contact</NavLink>
            </NavItem>
          </Nav>
          <NavbarBrand>{props.section}</NavbarBrand>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
