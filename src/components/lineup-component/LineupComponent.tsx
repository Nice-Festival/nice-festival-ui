import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { NavbarComponent } from '../navbar-component/NavbarComponent';
import "./lineup.css"
import { FooterComponent } from '../footer/FooterComponen';

export class LineupComponent extends React.Component {

  render() {

    return (
      <div id="mainContent">

        <NavbarComponent />
        <ListGroup className="content">
          <ListGroupItem active>
            <ListGroupItemHeading>Performers</ListGroupItemHeading>
            <br></br>
            <br></br>

        <ListGroupItemText>
              STAGE 1 : Sunny Day Real Estae  5:15pm , Sum 41 6:30pm, Less Than Jake 7:45pm, Paramore 9:30pm
        </ListGroupItemText>
      </ListGroupItem>
        </ListGroup>


        <ListGroup className="content">
          <ListGroupItem active>
            <ListGroupItemHeading>Vendors</ListGroupItemHeading>
            <br></br>
            <br></br>
            <ListGroupItemHeading>Catering Unlimited</ListGroupItemHeading>
           </ListGroupItem>
        </ListGroup>
      <FooterComponent/>
      </div>
    );

  }
}
