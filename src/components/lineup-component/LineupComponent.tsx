import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { NavbarComponent } from '../navbar-component/NavbarComponent';
import "./lineup.css"
import { apiGetArtist } from '../remote/get-artist';
import { FooterComponent } from '../footer/FooterComponen';
import { apiGetVendor } from '../remote/get-vendors';

export class LineupComponent extends React.Component<any,any> {
  constructor(props: any) {
    super(props);
  }
  
  artists:any;
  vendors:any;
  
  componentDidMount(){
    this.artists = apiGetArtist();
    this.vendors = apiGetVendor();
  }

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
              {/* {this.artists["details"]} */}
        </ListGroupItemText>
      </ListGroupItem>
        </ListGroup>


        <ListGroup className="content">
          <ListGroupItem active>
            <ListGroupItemHeading>Vendors</ListGroupItemHeading>
            <br></br>
            <br></br>
          <ListGroupItemHeading>
            {/* {this.vendors["companyName"]} */}
            </ListGroupItemHeading>
          </ListGroupItem>
        </ListGroup>
        <FooterComponent />
      </div>
    );

  }
}
