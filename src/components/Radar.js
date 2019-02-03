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


// import RadarChart from 'react-svg-radar-chart';
// import 'react-svg-radar-chart/build/css/index.css';

// class Radar extends React.Component {
//     render() {
//         const data = [
//             {
//                 data: {
//                     Java: 0.7,
//                     IaaS: 0.9,
//                     PaaS: 0.9,
//                     RD: 1.0,
//                     JavaScript: .9
//                 },
//                 meta: { color: '#58FCEC' }
//             },
//             {
//                 data: {
//                     Java: 0.3,
//                     IaaS: 0.2,
//                     PaaS: 0.1,
//                     RD: 1.0,
//                     JavaScript: .9
//                 },
//                 meta: { color: '#33ff77' }
//             }
//         ];

//         const captions = {
//             // columns
//             Java: "Java",
//             IaaS: "IaaS",
//             PaaS: "PaaS",
//             RD: "RD",
//             JavaScript: "JavaScript"
//         };

//         return (

//             <Flippy
//                 flipOnHover={false} // default false
//                 flipOnClick={true} // default false
//                 flipDirection="horizontal" // horizontal or vertical
//                 ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
//                 // if you pass isFlipped prop component will be controlled component.
//                 // and other props, which will go to div
//                 style={{}} /// these are optional style, it is not necessary
//             >
//                 <FrontSide
//                     style={{
//                         backgroundColor: '#ffffff',
//                     }}
//                 >
//                     <div className="row">
//                         <Row>
//                             <Col sm="12">
//                                 <Card>
//                                     <RadarChart
//                                         captions={captions
//                                         }
//                                         data={data
//                                         }
//                                         size={400}
//                                     />
//                                     <CardBody>
//                                     </CardBody>
//                                 </Card>
//                             </Col>
//                         </Row>
//                     </div>
//                 </FrontSide>
//                 <BackSide
//                     style={{ backgroundColor: '#ffffff' }}>
//                     <Profile />
//                 </BackSide>
//             </Flippy>
//         );
//     }
// }

// export default Radar;

/* Imports */


am4core.useTheme(am4themes_animated);

class Radar extends Component {
  componentDidMount() {

    let chart = am4core.create("chartdiv", am4charts.RadarChart);

    chart.data = [{
        "Skill": "Java",
        "litres": 501
      }, {
        "Skill": "PaaS",
        "litres": 301
      }, {
        "Skill": "SaaS",
        "litres": 266
      }, {
        "Skill": "IaaS",
        "litres": 165
      }, {
        "Skill": "React",
        "litres": 139
      }, {
        "Skill": "Database",
        "litres": 336
      }, {
        "Skill": "Git",
        "litres": 290
      }, {
        "Skill": "Containers",
        "litres": 325
      }, {
        "Skill": "CICD",
        "litres": 40
      }];

  /* Create axes */
  let series = chart.series.push(new am4charts.RadarSeries());
  series.dataFields.valueY = "litres";
  series.dataFields.categoryX = "Skill";
  series.name = "Sales";
  series.strokeWidth = 3;
  series.zIndex = 2;
  series.stacked = true;

  let series2 = chart.series.push(new am4charts.RadarColumnSeries());
  series2.dataFields.valueY = "units";
  series2.dataFields.categoryX = "Skill";
  series2.name = "Senior Software Developer";
  series2.strokeWidth = 0;
  series2.columns.template.fill = am4core.color("#CDA2AB");
  series2.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
  series2.stacked = true;
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
                                <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
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
