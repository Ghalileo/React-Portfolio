import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import { Button } from '@material-ui/core';
import { Collapse,
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
        <AnchorLink href='#homeF'><Button id="homeB" variant="contained" color="primary"><span class="material-icons homeIcon">home</span></Button></AnchorLink>
        
        <NavbarToggler onClick={toggle} />
        
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
            <NavItem>
            <AnchorLink href='#portF'><Button id="portBut" variant="contained" color="primary">Portfolio</Button></AnchorLink>
            </NavItem>
            
            <NavItem>
              <AnchorLink href='#experienceF'><Button id="aboutB" variant="contained" color="primary">About Me</Button></AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink href='#experienceA'><Button id ="expB" variant="contained" color="primary">Experience</Button></AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink href='#experienceC'><Button id ="expB" variant="contained" color="primary">Contact</Button></AnchorLink>
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