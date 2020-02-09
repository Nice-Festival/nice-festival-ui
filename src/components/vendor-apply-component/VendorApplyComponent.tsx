import React from 'react';
import './vendor-apply.css';

export class VendorApplyComponent extends React.Component {
    render() {
        return (
            <div id="body">
                <div className="signup">
                    <div>
                        <h1>Vendor Application</h1>
                        Company Name:
                        <input type="text" placeholder="Crazy Chicken" className="txtb" />
                        Website:
                        <input type="text" placeholder="www.website.com" className="txtb" />
                        Company Product:
                        <select className="txtb">
                            <option>Food</option>
                            <option>Beverages</option>
                            <option>Merchandise</option>
                        </select>
                        More Details:
                        <textarea className="txtb"></textarea>
                        <input type="submit" value="Apply" className="signup-btn" />
                    </div>
                </div>
            </div>
        )
    }
}