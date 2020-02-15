import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export class LineupComponent extends React.Component {

    render(){

    return(
        <div>
     

<ListGroup>
      <ListGroupItem active>
          <ListGroupItemHeading>Performers</ListGroupItemHeading>
          <br></br>
          <br></br>

      <ListGroupItemHeading>Friday</ListGroupItemHeading>
        <ListGroupItemText>
        STAGE 1 : Sunny Day Real Estae  5:15pm , Sum 41 6:30pm, Less Than Jake 7:45pm, Paramore 9:30pm
        </ListGroupItemText>
        <ListGroupItemText>
        STAGE 2 : Lil Uzi Vert 5:30pm, Lil Nas X 6:45pm, Robyn 8:00pm, Drake and Future 9:30
        </ListGroupItemText>
        <ListGroupItemHeading>Saturday</ListGroupItemHeading>
        <ListGroupItemText>
        STAGE 1 : Jimi Hendrix 5:15pm, James Brown 6:30pm, Big Brother and the Holding Company American 7:45pm, Johnny Cash 9:30pm 
        </ListGroupItemText>
        <ListGroupItemText>
        STAGE 2 : Tina Turner 5:30pm, Black Sabbath 6:45pm, Elton John 8:00pm, Aretha Franklin 9:30pm 
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>Sunday</ListGroupItemHeading>
        <ListGroupItemText>
        STAGE 1 : The Ramones 5:15pm, The Eagles 6:30pm, Prince 7:45pm, Public Enemy 9:00pm, 'Watch the Throne' (Jay-z and Kanye West) 10:15pm
        </ListGroupItemText>
        STAGE 2 : Beyoncé 5:30pm, Amy Winehouse 6:45pm, Adele 8:00pm, Lizzo 9:15pm, Bob Marley 10:30pm
      </ListGroupItem>
</ListGroup>

<br></br>
<br></br>
<br></br>


    <ListGroup>
      <ListGroupItem active>
      <ListGroupItemHeading>Vendors</ListGroupItemHeading>
      <br></br>
     <br></br>
        <ListGroupItemHeading>Catering Unlimited</ListGroupItemHeading>
        <ListGroupItemText>
        Cajun Jambalaya ($7) and fried chicken dark meat 2-piece ($6), white meat 2-piece ($7), combo dark meat ($10), white meat ($11)
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>Joyce’s</ListGroupItemHeading>
        <ListGroupItemText>
        Lemonade ($3), Fruit Salad ($4)
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>Stuf Hapn Event Catering</ListGroupItemHeading>
        <ListGroupItemText>
        Creole Stuffed Crab (with potato salad) ($9), Catfish 
        Amandine (with potato salad) ($9), Potato Salad ($3); Combo ($12)</ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>Jamila’s Cafe</ListGroupItemHeading>
        <ListGroupItemText>
        Spinach, crawfish and zucchini bisque ($7), Merguez po-boy ($7)
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>Mr. Williams Pies</ListGroupItemHeading>
        <ListGroupItemText>
        Sweet potato, coconut ($5) and pecan ($6) pies        
        </ListGroupItemText>
      </ListGroupItem>
    </ListGroup>

        </div>
    );
    
    }
}
