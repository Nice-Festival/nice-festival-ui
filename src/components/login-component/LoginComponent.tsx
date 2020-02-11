import React, { SyntheticEvent } from 'react';

// interface ILoginState {
//     username: string
//     password: string
// }

// interface ILoginProps {
//     updateCurrentUser: (u:string, p:string) => void
//     loginMessage: string
// }

export class LoginComponent extends React.Component{
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
    
    render(){
        return(
            <div id="body">
                <div className="signup">
                    <div>
                        <h1>Login</h1>
                        Email:
                        <input type="email" placeholder="jdoe@gmail.com" className="txtb" />
                        Password:
                        <input type="password" placeholder="Password" className="txtb" />
                        <input type="submit" value="Create Account" className="signup-btn" />

                        <a href="#">Forget password?</a>
                    </div>
                </div>
            </div>
        )
    }
}