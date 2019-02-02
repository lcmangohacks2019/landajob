import React, { Component } from 'react'
import { Progress } from 'reactstrap';

export default class ProgressBars extends Component {
  render() {
    return (
      <div>
        <h4 className="text-right">{this.props.title}</h4>
        <Progress color="primary" value={this.props.progress}>{this.props.progress}%</Progress>
      </div>
    )
  }
}
