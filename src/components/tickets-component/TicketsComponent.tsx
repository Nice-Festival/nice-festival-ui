import React from 'react'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  import "./tickets.css";
import { CheckoutComponet } from '../checkout-component/CheckoutComponent';


export class TicketsComponent extends React.Component {


    render() {
        return (
            <div>
                <h1>Tickets</h1>
                <br></br>
                    <div id = "ticket">
                        
                    <Card>
                        <CardImg top width="30%" img src="https://nicefestival-api.s3.us-east-2.amazonaws.com/green-wristbands-3431448.jpg" alt="Card image cap"  />
                        <CardBody>
                        <CardTitle>$50.00</CardTitle>
                        <CardSubtitle>Weekend Pass</CardSubtitle>
                        <CardText>This ticket providers access to the festival grounds for the full weekend.</CardText>
                        <Button id="50ticket">Buy Ticket</Button>
                        </CardBody>
                    </Card>
                    </div>
                    <br></br>

                    <div>
                        <CheckoutComponet />
                    </div>
            </div>
        )
    }
}