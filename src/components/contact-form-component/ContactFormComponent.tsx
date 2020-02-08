import React from 'react';
import './contact-form.css';


export class ContactFormComponent extends React.Component{

    render(){
        return(
            <div id="body">
                <div className="signup">
                    <div>
                        <h1> Inquiry </h1>
                        Name:
                        <input type="text" placeholder="John Doe" className="txtb" />
                        Email:
                        <input type="text" placeholder="jdoe@gmail.com" className="txtb" />
                        Inquiry Type:
                        <select className="txtb">
                            <option>Performer Inquiries</option>
                            <option>Food Vendor</option>
                            <option>Non-Food Vendor</option>
                            <option>Lost & Found</option>
                            <option>Camping</option>
                            <option>Video & Photography</option>
                            <option>Website issues</option>
                            <option>Other</option>
                        </select>
                        More Details:
                        <textarea className="txtb"></textarea>
                        <input type="submit" value="Send Inquiry" className="signup-btn" />
                    </div>
                </div>
            </div>
        )
    }
}