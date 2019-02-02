import React, { Component } from 'react'
import { Button, Fade } from 'reactstrap';

export default class Toggle extends Component {

    constructor(props) {
        super(props);
        this.state = { fadeIn: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        })};

  render() {
    return (
        <div>
            <Button color="secondary btn-lg w-100" onClick={this.toggle}>{this.props.title}</Button>
            
            <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                This content will fade in and out as the button is pressed
            </Fade>
        </div>

    )
  }
}