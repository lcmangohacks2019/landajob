import React, { Component } from 'react'
import { Progress } from 'reactstrap';

export default class Profile extends Component {

  render() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h1>Andres De Jesus Cabrera</h1>
                    <h4 className="text-right">Java</h4>
                    <Progress color="danger" value="25">25%</Progress>
                    <h4 className="text-right">Graph QL</h4>
                    <Progress value={50}>50%</Progress>
                    <h4 className="text-right">React</h4>
                    <Progress color="warning" value={75}>75% You're almost there!</Progress>
                    <h4 className="text-right">Python</h4>
                    <Progress color="success" value="100">You did it!</Progress>
                </div>
            </div>
            <div className="row">
                <div className="col">
  
                </div>
            </div>
        </div>
    )
  }
}
