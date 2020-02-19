import React from 'react'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  import "./tickets.css";


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
                        <Button>Buy Ticket</Button>
                        </CardBody>
                    </Card>
                    </div>
                    <br></br>
                    <div id = "ticket">
                    <Card>
                        <CardImg top width="30%" img src="https://nicefestival-api.s3.us-east-2.amazonaws.com/green-wristbands-3431448.jpg" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>$15.00</CardTitle>
                        <CardSubtitle>Single Day Ticket</CardSubtitle>
                        <CardText>This ticket providers access to the festival grounds for a single day.</CardText>
                        <Button>Buy Ticket</Button>
                        </CardBody>
                    </Card>
                    </div>
            </div>
        )
    }
}