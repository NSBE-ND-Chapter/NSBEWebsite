import { React, Component } from "react";
import { Row, Col } from 'react-bootstrap';
import './AboutUs.css';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="AboutUs">
                {/* For Vision */}
                <Row id="vision">
                    <Col id="image">
                        <img
                            src={require('../../Media/Images/AboutUs/Sample.jpg')}
                            alt="Vision"
                        />
                    </Col>
                    <Col id="text">
                    <h4> Our Vision:  </h4>
                            <p>
                                “We envision a world in which
                                engineering is a mainstream word in homes
                                and communities of color, and all Black
                                students can envision themselves as
                                engineers. In this world, Blacks exceed parity
                                in entering engineering fields, earning
                                degrees, and succeeding professionally.”
                            </p>
                    </Col>
                    </Row>

                    {/* For Mission */}
                <Row id="mission">
                    <Col id="image">
                        <img
                            src={require('../../Media/Images/AboutUs/Sample.jpg')}
                            alt="Mission"
                        />
                    </Col>
                    <Col id="text">
                    <h4> Our Mission: </h4>

                            <p>
                                "to increase the number of
                                culturally responsible Black Engineers
                                who excel academically, succeed
                                professionally and positively impact the community."
                            </p>
                    </Col>
                    </Row>

                     {/* For what NSBE Offers */}
                <Row id="offer">
                    <Col id="image">
                        <img
                            src={require('../../Media/Images/AboutUs/Sample.jpg')}
                            alt="Offer"
                        />
                    </Col>
                    <Col id="text">
                    <h4>What does NSBE offer you?</h4>

                            <p>
                                NSBE offers leadership training, professional development activities,
                                mentoring, career placement services, community service opportunities
                                and more.
                            </p>
                    </Col>
                    </Row>
                    
            </div>
        );
    }
}