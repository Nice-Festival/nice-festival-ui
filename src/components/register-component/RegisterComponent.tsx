import React from 'react';
import './register.css';

export class RegisterComponent extends React.Component {

    render() {
        return (
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

                        <a href="#">Already Have an account? Sign in</a>
                    </div>
                </div>
            </div>
        )
    }
}