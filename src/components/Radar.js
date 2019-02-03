// import React from 'react';
import React, { Component } from 'react';
import {
    Card, // CardImg, CardText, 
    CardBody,
    // CardTitle, CardSubtitle, Button, 
    Row, Col
} from 'reactstrap';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Profile from "../components/Profile"
//import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class Radar extends Component {
  componentDidMount() {

/* Create chart instance */
let chart = am4core.create("chartdiv", am4charts.RadarChart);

/* Add data */
chart.data = [{
  "Skills": "C#",
  "Skill Points": 501,
  "units": 250
}, {
  "Skills": "SaaS",
  "Skill Points": 301,
  "units": 222
}, {
  "Skills": "IaaS",
  "Skill Points": 266,
  "units": 179
}, {
  "Skills": "PaaS",
  "Skill Points": 165,
  "units": 298
}, {
  "Skills": "DCIC",
  "Skill Points": 139,
  "units": 299
}, {
  "Skills": "Docker",
  "Skill Points": 336,
  "units": 185
}, {
  "Skills": "Git",
  "Skill Points": 290,
  "units": 150
}, {
  "Skills": "ASP.NET",
  "Skill Points": 325,
  "units": 382
}, {
  "Skills": ".NET",
  "Skill Points": 40,
  "units": 172
}];

/* Create axes */
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Skills";

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

/* Create and configure series */
let series = chart.series.push(new am4charts.RadarSeries());
series.dataFields.valueY = "Skill Points";
series.dataFields.categoryX = "Skills";
series.name = "Current Skills";
series.strokeWidth = 3;
series.zIndex = 2;

let series2 = chart.series.push(new am4charts.RadarColumnSeries());
series2.dataFields.valueY = "units";
series2.dataFields.categoryX = "Skills";
series2.name = "Next Level";
series2.strokeWidth = 0;
series2.columns.template.fill = am4core.color("#CDA2AB");
series2.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
        <Flippy
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{}} /// these are optional style, it is not necessary
            >
                <FrontSide
                    style={{
                        backgroundColor: '#ffffff',
                    }}
                >
                    <div className="row">
                        <Row>
                            <Col>
                                <Card>
                                <div id="chartdiv" style={{ width: "650px", height: "650px" }}></div>
                                    <CardBody>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </FrontSide>
                <BackSide
                    style={{ backgroundColor: '#ffffff' }}>
                    <Profile />
                </BackSide>
            </Flippy>
        );
    }
}
export default Radar;
