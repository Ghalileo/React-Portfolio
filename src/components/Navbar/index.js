import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import { Button,Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText } from 'reactstrap';
  import "./style.css";





const Navv = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="navBarr"  light expand="md">
        <AnchorLink href='#homeF'><Button id="homeB" outline color="primary">Home</Button></AnchorLink>
        <NavbarToggler onClick={toggle} />
        
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
            <NavItem>
            <AnchorLink href='#portF'><Button id="portBut" outline color="info">Portfolio</Button></AnchorLink>
            </NavItem>
            
            <NavItem>
              <AnchorLink href='#experienceF'><Button id="aboutB"outline color="success">About Me</Button></AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink href='#experienceA'><Button id ="expB"outline color="warning">Experience</Button></AnchorLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <NavbarText id="rightSide">Ghalileo</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navv;