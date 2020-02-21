import React from 'react'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import "./tickets.css";
import { apiMakePayment } from '../remote/procees-payment'
import { CheckoutComponet } from '../checkout-component/CheckoutComponent';



export class TicketsComponent extends React.Component<any, any> {

    buy = () => {
        apiMakePayment();
        this.props.history.push("/");
    }
    
    goBack = () => {
        this.props.history.push("customer");
    }

    render() {
        return (
            <div>
                <br></br>
                <div id="ticket">

                    <Card>
                        <CardImg top width="30%" img src="https://nicefestival-api.s3.us-east-2.amazonaws.com/green-wristbands-3431448.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>$50.00</CardTitle>
                            <CardSubtitle>Weekend Pass</CardSubtitle>
                            <CardText>This ticket providers access to the festival grounds for the full weekend.</CardText>
                            <Button
                                onClick={this.buy}
                                id="50ticket">Buy Ticket</Button>
                        </CardBody>
                    </Card>
                    <div>
                        <CheckoutComponet />
                        <button
                        onClick={this.goBack}
                        >Go back dashboard</button>
                    </div>
                </div>
            </div>
        )
    }
}