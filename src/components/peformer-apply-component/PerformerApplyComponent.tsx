import React from 'react';


export class PerformerApplyComponent extends React.Component {
    render() {
        return (
            <div id="body">
                <div className="signup">
                    <div>
                        <h1>Performer Application</h1>
                        Performer Name:
                        <input type="text" placeholder="Kaskade" className="txtb" />
                        Music Genre:
                        <select className="txtb">
                            <option>Trance</option>
                            <option>Rap</option>
                            <option>Hip Hop</option>
                            <option>Electro House</option>
                            <option>DnB</option>
                            <option>Pop</option>
                            <option>R&B</option>
                            <option>Techno</option>
                        </select>                        
                        Performance Day:
                        <select className="txtb">
                            <option>Saturday</option>
                            <option>Sunday</option>
                        </select>
                        Desired Time Slot:
                        <select className="txtb">
                            <option>2:00pm</option>
                            <option>3:00pm</option>
                            <option>4:00pm</option>
                            <option>5:00pm</option>
                            <option>6:00pm</option>
                            <option>7:00pm</option>
                            <option>8:00pm</option>
                            <option>9:00pm</option>
                            <option>10:00pm</option>
                            <option>11:00pm</option>
                            <option>12:00pm</option>
                            <option>1:00am</option>
                            <option>2:00am</option>
                            <option>3:00am</option>
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