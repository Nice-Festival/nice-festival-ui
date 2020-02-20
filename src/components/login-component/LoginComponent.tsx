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

export class LoginComponent extends React.Component<any,ILoginState> {
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
                this.props.history.push("/customer")
            }
            else if(this.props.currentUser["role"] === "VENDOR"){
                console.log("Vendor");
                this.props.history.push("/vendor")

            }
            else if(this.props.currentUser["role"] === "MANAGER"){
            }
            else if(this.props.currentUser["role"] === "ARTIST"){
                console.log("Artist");
                this.props.history.push("/performer")

            }
        }
    }

    render() {
        return (
            <div id="loginContent">
                <NavbarComponent id="nav" />
                <div id="login-body">
                    <div className="login">
                        <div>
                            <h1>Login</h1>
                            Username:
                        <input 
                        type="text" 
                        placeholder="jdoe" 
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