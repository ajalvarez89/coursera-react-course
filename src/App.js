import React, { useState } from 'react';
import './App.css';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap';
import Menu from './components/Menu'
import MenuFunction from './components/MenuFunction'

function  App() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar dark color='primary'>
        <div className="container">
          <NavbarBrand href='/'>Coursera React Course</NavbarBrand>
        </div>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      {/* <Menu/> */}
      <MenuFunction/>
    </div>
  );
}

export default App;
