import React from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menu'
import MenuFunction from './components/MenuFunction'

function App() {
  return (
    <div>
      <Navbar dark color='primary'>
        <div className="container">
          <NavbarBrand href='/'>Coursera React Course</NavbarBrand>
        </div>
      </Navbar>
      {/* <Menu/> */}
      <MenuFunction/>
    </div>
  );
}

export default App;
