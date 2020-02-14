import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,

} from 'reactstrap';
import { Link } from 'react-router-dom';

 

export const NavbarComponent = (props : any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  

  return(
    <div>
            <Navbar color="light" light expand="md">
              <Nav className="mr-auto" navbar>

              <NavItem >
                <Link to ="/">NICE Festival</Link>
              </NavItem>
                <NavItem>
                  <Link to='/login'>Login</Link>
                </NavItem>
                <NavItem>
                  <Link to='/lineup'>Lineup</Link>
                </NavItem>
              </Nav>
            </Navbar>
    </div>

  );

}