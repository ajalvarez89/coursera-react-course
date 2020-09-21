import React, { useState } from 'react';
import './App.css';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import Menu from './components/Menu'
import { DISHES } from './shared/dishes'
// import MenuFunction from './components/MenuFunction'

function  App() {

  const [dishes, setDishes] = useState(DISHES)
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);


  return (
    <div>
      <Navbar dark color='primary'>
        <div className="container">
          <NavbarBrand href='/'>Coursera React Course</NavbarBrand>
        </div>
      </Navbar>
      <Menu
        dishes={dishes}
      />
    </div>
  );
}

export default App;
