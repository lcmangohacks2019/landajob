import React from 'react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import {
    Card, // CardImg, CardText, 
    CardBody,
    // CardTitle, CardSubtitle, Button, 
    Row, Col
} from 'reactstrap';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Profile from "../components/Profile"

class Radar extends React.Component {
    render() {
        const data = [
            {
                data: {
                    Java: 0.7,
                    IaaS: 0.9,
                    PaaS: 0.9,
                    RD: 1.0,
                    JavaScript: .9
                },
                meta: { color: '#58FCEC' }
            },
            {
                data: {
                    Java: 0.3,
                    IaaS: 0.2,
                    PaaS: 0.1,
                    RD: 1.0,
                    JavaScript: .9
                },
                meta: { color: '#33ff77' }
            }
        ];

        const captions = {
            // columns
            Java: "Java",
            IaaS: "IaaS",
            PaaS: "PaaS",
            RD: "RD",
            JavaScript: "JavaScript"
        };

        return (
            <div class="container">
            <div class="d-flex justify-content-center">
            <Flippy
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '400px', height: '400px' }} /// these are optional style, it is not necessary
            >
                <FrontSide
                    style={{
                        backgroundColor: '#ffffff',
                    }}
                >
                    <div className="row">
                        <Row>
                            <Col sm="12">
                                <Card>
                                    <RadarChart
                                        captions={captions
                                        }
                                        data={data
                                        }
                                        size={400}
                                    />
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
            </div>
            </div>
        );
    }
}

export default Radar;