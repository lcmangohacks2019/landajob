import React, { Component } from 'react'
import Toggle from "./Toggle";
import { ButtonGroup } from "reactstrap";
import ProgressBars from "./ProgressBars";
import {EmployeeTable} from "../graphql/query"
import { compose } from 'react-compose';
import gql from "graphql-tag";


class Profile extends Component {

    state = {
        skills: [
            {
                id: 1,
                title:"Java",
                progress: "20"
            },
            {
                id: 2,
                title:"Python",
                progress: "100"
            },
            {
                id: 3,
                title:"GraphQL",
                progress: "60"
            }
        ],
        userID: "cjrnnfvx4006v01pd02v6kwvf"
    }

    

  render() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h1>
                        
                    </h1>
                    {
                        this.state.skills.map(
                            skill => (<ProgressBars key={skill.id} title={skill.title} progress={skill.progress}/>)
                        )
                    }
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <ButtonGroup className="justify-content-center w-100">
                        <Toggle title="Settings"/>
                        <Toggle title="Stats"/>
                    </ButtonGroup>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {
                        EmployeeTable
                    }
                </div>
            </div>
        </div>
    )
  }
}
const Employee = (userID) => {
    let employee = gql`
    query employeeFullname{
        employee (id: $userID) {
            fullName,
            Level,
            }
        }
    `
    return employee;
}
export default compose(Employee)(Profile)
// export default Profile;