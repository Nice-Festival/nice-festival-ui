import React from 'react';
import { NavbarComponent } from '../navbar-component/NavbarComponent';
import "./home.css";
import { Container } from '@material-ui/core';
import { FooterComponent } from '../footer/FooterComponen';


export class HomeComponent extends React.Component {
    render() {
        return (
            <div>
                <NavbarComponent />
                <Container maxWidth="md">
                    <div id="content">
                        <div id="first">
                            <h1>TRAVEL BEYOND</h1>
                            <p className="desc">When day breaks at NICE Fest, it becomes a place where we can forget about our problems for a little while.</p>
                            <img src="https://i.ibb.co/njSXn2z/abstract-architecture-art-artistic-262577.jpg" alt="abstract-architecture-art-artistic-262577" />
                        </div>
                        <div id="second">
                            <h1>THE STAGES</h1>
                            <p className="desc">“HERE’S TO THE NIGHTS THAT TURNED INTO MORNINGS, AND THE FRIENDS THAT TURNED INTO FAMILY</p>
                            <img src="https://i.ibb.co/86nLvz8/people-having-a-concert-1190297.jpg" alt="people-having-a-concert-1190297" />
                        </div>
                        <div id="third">
                            <h1>THE MUSIC</h1>
                            <p className="desc">We groove to the same universal beat and, together, create beautiful experiences that will never be forgotten.</p>
                            <img src="https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="green-wristbands-3431448" />
                        </div>
                    </div>
                </Container>
                <FooterComponent/>
            </div>
        )
    }
}