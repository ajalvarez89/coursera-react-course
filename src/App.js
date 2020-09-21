import React, { useState } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menu'
import { DISHES } from './shared/dishes'
// import MenuFunction from './components/MenuFunction'

function  App() {

  const [dishes] = useState(DISHES)

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
