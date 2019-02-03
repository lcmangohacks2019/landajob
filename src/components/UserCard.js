import React from 'react';
import { Card, Media, Row } from 'reactstrap';
import Radar from '../components/Radar';

function Welcome(props) {
  return <div>
    <Media className="m-5">
      <Media left href="/{props.link}">
        <img src="{props.image}" alt="Profile Picture" /> // get correct db name
      </Media>
      <Media body>
        <Media heading>
          {props.name}
        </Media>
        {props.currentJob}, {props.futureJob}, {props.level}, {props.points}, Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </Media>
    </Media>
  </div>

}


const UserCard = () => {
  return (
      <div class="container">
        <div class="justify-content-center">
          <div className="row">
            <Row>
              <div class="col-5">
                <Card>
                  <Media className="m-6">
                  <Media left href="#">
                    <img src="https://via.placeholder.com/100x100/"/>
                  </Media>
                  <Media body>
                    <Media heading>
                      Media heading
                    </Media>
                  </Media>
                </Media>
                </Card>
              </div>
             </Row>
            </div>
          <div>
          <Radar />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
