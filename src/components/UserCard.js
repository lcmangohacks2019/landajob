import React from 'react';
import { Media } from 'reactstrap';

const Example = () => {
  return (
    <div>
    <Media className="m-5">
    <Media left href="#">
      {/* <Media object data-src="https://via.placeholder.com/64x64/" alt="" /> */}
      <img src="https://via.placeholder.com/100x100/"/>
    </Media>
    <Media body>
      <Media heading>
        Media heading
      </Media>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </Media>
  </Media>
  </div>
  );
};

export default Example;
