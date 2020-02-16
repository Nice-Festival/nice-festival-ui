import React, { SyntheticEvent } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import { NavbarComponent } from '../navbar-component/NavbarComponent';
import { FooterComponent } from '../footer/FooterComponen';
import {apiRegister} from '../remote/register';

interface IRegisterState {
    username: string
    password: string
    firstName: string
    lastName: string
    email: string
    role: string
    
}

interface IRegisterProps {
    message: string
}

export class RegisterComponent extends React.Component<any, IRegisterState> {
    constructor(props: any) {
        super(props)
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            role: 'CUSTOMER'
        }
    }

    updateUsername = (event: any) => {
        this.setState({
            ...this.state,
            username: event.target.value
        })

    }

    updatePassword = (event: any) => {
        this.setState({
            ...this.state,
            password: event.target.value
        })
    }
    updateFirstName = (event: any) => {
        this.setState({
            ...this.state,
            firstName: event.target.value
        })
    }
    updateLastName = (event: any) => {
        this.setState({
            ...this.state,
            lastName: event.target.value
        })
    }
    updateEmail = (event: any) => {
        this.setState({
            ...this.state,
            email: event.target.value
        })
    }
    updateRole = (event: any) => {
        this.setState({
            ...this.state,
            role: event.target.value
        })
    }


    register = async (event: SyntheticEvent) => {
        event.preventDefault()
        apiRegister(
            this.state.username, 
            this.state.password,
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.role
            );
    }

    render() {
        return (
            <div id="content">
                <NavbarComponent id="nav" />
                <div id="body">
                    <div className="signup">
                        <div>
                            <h1>Sign up</h1>
                            First Name:
                        <input 
                        type="text" 
                        placeholder="First Name" 
                        className="txtb" 
                        required
                        value={this.state.firstName}
                        onChange={this.updateFirstName} 
                        />
                            Last Name:
                        <input 
                        type="text" 
                        placeholder="Last Name" 
                        className="txtb" 
                        required
                        value={this.state.lastName}
                        onChange={this.updateLastName}
                        />
                            Email:
                        <input 
                        type="email" 
                        placeholder="jdoe@gmail.com" 
                        className="txtb" 
                        required
                        value={this.state.email}
                        onChange={this.updateEmail}
                        />
                            Username:
                        <input 
                        type="text" 
                        placeholder="jdoe" 
                        className="txtb" 
                        required
                        value={this.state.username}
                        onChange={this.updateUsername}
                        />
                            Password:
                        <input 
                        type="password" 
                        placeholder="Password" 
                        className="txtb" 
                        required
                        value={this.state.password}
                        onChange={this.updatePassword}
                        />
                            Account Type:
                            <select 
                            className="txtb" 
                            defaultValue="CUSTOMER"
                            onChange={this.updateRole}
                            >
                                <option 
                                value="CUSTOMER" 
                                >Customer</option>
                                <option 
                                value="VENDOR"
                                >Vendor</option>
                                <option 
                                value="ARTIST"
                                >Artist</option>
                            </select>
                            <input 
                            type="submit" 
                            value="Create Account" 
                            className="signup-btn" 
                            onClick={this.register}
                            />

                            <Link id="link" to="/login">
                                Already Have an account? Sign in
                            </Link>
                        </div>
                    </div>
                </div>
                <FooterComponent/>
            </div>
        )
    }
}