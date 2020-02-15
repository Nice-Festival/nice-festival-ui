import React from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import { NavbarComponent } from '../navbar-component/NavbarComponent';
import { FooterComponent } from '../footer/FooterComponen';

export class RegisterComponent extends React.Component {

    render() {
        return (
            <div id="content">
                <NavbarComponent id="nav" />
                <div id="body">
                    <div className="signup">
                        <div>
                            <h1>Sign up</h1>
                            First Name:
                        <input type="text" placeholder="First Name" className="txtb" />
                            Last Name:
                        <input type="text" placeholder="Last Name" className="txtb" />
                            Email:
                        <input type="email" placeholder="jdoe@gmail.com" className="txtb" />
                            Password:
                        <input type="password" placeholder="Password" className="txtb" />
                            Account Type:
                            <select className="txtb">
                                <option>Customer</option>
                                <option>Vendor</option>
                                <option>Performer</option>
                            </select>
                            <input type="submit" value="Create Account" className="signup-btn" />

                            <Link to="/login">
                                <a href="#">Already Have an account? Sign in</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <FooterComponent/>
            </div>
        )
    }
}