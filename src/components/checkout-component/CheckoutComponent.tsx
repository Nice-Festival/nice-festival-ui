import React from 'react'
import { Divider } from '@material-ui/core'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./checkout.css"


export class CheckoutComponet extends React.Component {

    render(){

        return(
            <div id="checkout">
            <form>
            <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="Credit Card Number">Card Number</Label>
            <Input type="number" name="cardNumber" id="cardNumber" placeholder="1234 5678 9012 3467" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="EXP Date">Experation Date</Label>
            <Input type="month" name="expDate" id="expDate" placeholder="99/9999" />
          </FormGroup>
        </Col>
      </Row>
            </form>

            </div>
        )
        
    };
    
}