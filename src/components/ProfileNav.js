import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


const oneStyle = {
    display: "none"
}

const twoStyle = {
    display: "none"
}

export default class ProfileNav extends React.Component {

    state = {
        on: false,
    }

    toggleOne = () => {
        this.setState(
            {
                on: !this.state.on
            }
        )
    }

  render() {
    return (
      <div>
          <Nav tabs>
          <NavItem>
            <NavLink href="#one" onClick={this.toggle}>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#two" onClick={this.toggle}>Link</NavLink>
          </NavItem>
        </Nav>

          {
              this.toggle && (
                <div style={oneStyle} id="one">
                    <h1>One</h1>
                </div>
              )
          }
        

        <div style={twoStyle} id="two">
            <h1>Two</h1>
        </div>
      </div>
    );
  }
}