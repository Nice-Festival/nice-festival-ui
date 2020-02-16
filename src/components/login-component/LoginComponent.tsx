import React, { SyntheticEvent } from 'react';
import "./login.css";
import { Link,  withRouter } from 'react-router-dom';
import { NavbarComponent } from '../navbar-component/NavbarComponent';
import { FooterComponent } from '../footer/FooterComponen';
interface ILoginState {
    username: string
    password: string
}

interface ILoginProps {
    currentUser:any,
    updateCurrentUser: (u:string, p:string) => void
    loginMessage: string
}

export class LoginComponent extends React.Component<ILoginProps,ILoginState> {
    constructor(props: any) {
        super(props)
        this.state = {
            username: '',
            password: ''
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

    submitLogin = async (event: SyntheticEvent) => {
        event.preventDefault()
        await this.props.updateCurrentUser(this.state.username, this.state.password)
        console.log(this.props.currentUser);
        if(this.props.currentUser === null){
            console.log("You are not a user");
        }
        else {
            if(this.props.currentUser["role"] === "CUSTOMER"){
                console.log("Customer");
            }
            else if(this.props.currentUser["role"] === "VENDOR"){
                console.log("Vendor");

            }
            else if(this.props.currentUser["role"] === "MANAGER"){
                console.log("Artist");
            }
            else if(this.props.currentUser["role"] === "ARTIST"){

            }
        }
    }

    render() {
        return (
            <div id="content">
                <NavbarComponent id="nav" />
                <div id="login-body">
                    <div className="login">
                        <div>
                            <h1>Login</h1>
                            Email:
                        <input 
                        type="email" 
                        placeholder="jdoe@gmail.com" 
                        className="txtb" 
                        onChange={this.updateUsername}
                        />
                            Password:
                        <input 
                        type="password" 
                        placeholder="Password" 
                        className="txtb" 
                        onChange={this.updatePassword}
                        />
                            <input type="submit" value="Login" className="signup-btn" onClick={this.submitLogin} />

                            <Link id="link" to="/register">
                                Don't Have an Account? Sign up
                            </Link>
                        </div>
                    </div>
                </div>
                <FooterComponent/>
            </div>
        )
    }
}