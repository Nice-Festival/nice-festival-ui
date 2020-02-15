import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  Container


} from 'reactstrap';
import "./navbar.css";
import { Link } from 'react-router-dom';



export const NavbarComponent = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div id="header">
      <Navbar color="light" light expand="md">
        <Nav id="nav" className="container" navbar>
            <NavItem>
              <Link className="link " to="/">Home</Link>
            </NavItem>
            <NavItem >
              <Link className="link " to="/register">Register</Link>
            </NavItem>
            <NavItem>
              <Link className="link" to='/login'>Login</Link>
            </NavItem>
            <NavItem>
              <Link className="link" to='/lineup'>Lineup</Link>
            </NavItem>
        </Nav>
      </Navbar>
    </div>

  );

}