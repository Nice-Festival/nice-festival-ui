import React, { SyntheticEvent } from 'react';
import "./login.css";
import { Link } from 'react-router-dom';
// interface ILoginState {
//     username: string
//     password: string
// }

// interface ILoginProps {
//     updateCurrentUser: (u:string, p:string) => void
//     loginMessage: string
// }

export class LoginComponent extends React.Component {
    // constructor(props: any) {
    //     super(props)
    //     this.state = {
    //         username: '',
    //         password: ''
    //     }
    // }

    // updateUsername = (event: any) => {
    //     this.setState({
    //         ...this.state,
    //         username: event.target.value
    //     })
    // }

    // updatePassword = (event: any) => {
    //     this.setState({
    //         ...this.state,
    //         password: event.target.value
    //     })
    // }

    // submitLogin = async (event: SyntheticEvent) => {
    //     event.preventDefault()
    //     this.props.updateCurrentUser(this.state.username, this.state,password)
    // }

    render() {
        return (
            <div id="body">
                <div className="signup">
                    <div>
                        <h1>Login</h1>
                        Email:
                        <input type="email" placeholder="jdoe@gmail.com" className="txtb" />
                        Password:
                        <input type="password" placeholder="Password" className="txtb" />
                        <input type="submit" value="Login" className="signup-btn" />

                        <Link to="/register">
                            <a href="#">Don't Have an Account? Sign up</a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}