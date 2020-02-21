import React, { SyntheticEvent } from 'react';
import './contact-form.css';
import { NavbarComponent } from '../navbar-component/NavbarComponent';
import { FooterComponent } from '../footer/FooterComponen';
import Axios from 'axios';


export class ContactFormComponent extends React.Component<any, any> {

    constructor(props: any) {
        super(props)
        this.state = {
            name: '',
            email: '',
            inquiry: 'Performer Inquiries',
            details: ''
        }
    }

    updateName = (event: any) => {
        this.setState({
            ...this.state,
            name: event.target.value
        })

    }

    updateEmail = (event: any) => {
        this.setState({
            ...this.state,
            email: event.target.value
        })
    }
    updateInquiry = (event: any) => {
        this.setState({
            ...this.state,
            inquiry: event.target.value
        })
    }
    updateDetails = (event: any) => {
        this.setState({
            ...this.state,
            details: event.target.value
        })
    }

    sendEmail = async (event: SyntheticEvent) => {
        event.preventDefault();
        await Axios.post("https://email-sender-nice-festival.herokuapp.com/postData", {
            "name": this.state.name,
            "email": this.state.email,
            "inquiry": this.state.inquiry,
            "details": this.state.details
        });

        this.props.history.push("/");

    }
    render() {
        return (
            <div id="content">
                <NavbarComponent />
                <div id="contact-body">
                    <div className="signup">
                        <div>
                            <h1> Inquiry </h1>
                             Name:
                        <input type="text" 
                        placeholder="John Doe"
                         className="txtb" 
                         value={this.state.name}
                         onChange={this.updateName} 
                         required
                         />
                            Email:
                        <input 
                        type="text" 
                        placeholder="jdoe@gmail.com" 
                        className="txtb" 
                        value={this.state.email}
                        onChange={this.updateEmail} 
                        required
                        />
                            Inquiry Type:
                        <select 
                        className="txtb" 
                        defaultValue="Performer Inquiries"
                        onChange={this.updateInquiry}
                        required
                        >
                                <option value="Performer Inquiries">Performer Inquiries</option>
                                <option value="Food Vendor">Food Vendor</option>
                                <option value="Non-Food Vendor">Non-Food Vendor</option>
                                <option value="Lost & Found">Lost & Found</option>
                                <option value="Camping">Camping</option>
                                <option value="Video & Photography">Video & Photography</option>
                                <option value="Website issues">Website issues</option>
                                <option value="Other">Other</option>
                            </select>
                            More Details:
                        <textarea 
                        className="txtb"
                        value={this.state.details}
                        onChange={this.updateDetails} 
                        required
                        ></textarea>
                            <input 
                            type="submit" 
                            value="Send Inquiry" 
                            className="signup-btn" 
                            onClick={this.sendEmail}
                            />
                        </div>
                    </div>
                </div>
                <FooterComponent/>
            </div>
        )
    }
}