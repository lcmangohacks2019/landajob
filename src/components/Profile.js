import React, { Component } from 'react'
import Toggle from "./Toggle";
import { ButtonGroup } from "reactstrap";
import ProgressBars from "./ProgressBars";
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button, Row, Col
// } from 'reactstrap';
export default class Profile extends Component {

    state = {
        skills: [
            {
                title:"Java",
                progress: "20"
            },
            {
                title:"Python",
                progress: "100"
            },
            {
                title:"GraphQL",
                progress: "60"
            }
        ]
    }

  render() {
    return (
        <div className="container-fluid">
            <div className="row">
                    <div className="col">
                    <h1>Andres De Jesus Cabrera</h1>
                    {
                        this.state.skills.map(
                            skill => (<ProgressBars title={skill.title} progress={skill.progress}/>)
                        )
                    }
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <ButtonGroup taps className="justify-content-center w-100">
                        <Toggle title="Settings"/>
                        <Toggle title="Stats"/>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    )
  }
}
