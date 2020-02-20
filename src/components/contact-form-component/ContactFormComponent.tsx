import React from 'react';
import './contact-form.css';
import { NavbarComponent } from '../navbar-component/NavbarComponent';


export class ContactFormComponent extends React.Component<any, any> {

    constructor(props: any) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            inquiry: 'Performer Inquiries',
            details: ''
        }
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
    render() {
        return (
            <div id="content">
                <NavbarComponent />
                <div id="contact-body">
                    <div className="signup">
                        <div>
                            <h1> Inquiry </h1>
                            First Name:
                        <input type="text" 
                        placeholder="John"
                         className="txtb" 
                         value={this.state.firstName}
                         onChange={this.updateFirstName} 
                         required
                         />
                            Last Name:
                        <input type="text" 
                        placeholder="Doe"
                         className="txtb" 
                         value={this.state.lastName}
                         onChange={this.updateLastName} 
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
                            <input type="submit" value="Send Inquiry" className="signup-btn" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}