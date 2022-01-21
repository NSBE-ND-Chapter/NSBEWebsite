
import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Profile from '../../Components/Profile/Profile';
import './Home.css';




export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <div id='Carousel-Image'>
                            <img
                                className="d-block w-100"
                                src={require("../../Media/Images/Carousel/Item1.jpg")}
                                alt="Student talking to mentor"
                            />
                        </div>
                        <Carousel.Caption id='carousel-caption'>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div id='Carousel-Image'>
                            <img
                                className="d-block w-100"
                                src={require("../../Media/Images/Carousel/Item2.jpg")}
                                alt="Students talking to mentor"
                            />
                        </div>
                        <Carousel.Caption id='carousel-caption'>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div id='Carousel-Image'>
                            <img
                                className="d-block w-100"
                                src={require("../../Media/Images/Carousel/Item3.jpg")}
                                alt="Student talking to mentor"
                            />
                        </div>

                        <Carousel.Caption id='carousel-caption'>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div id='Leaders'>
                    <h2>Our Leaders</h2>
                    <p>Meet our leadership team :)</p>
                    <Container>
                        <Row xs={1} md={3} id='row'>
                            <Col>
                                <Profile />
                            </Col>
                            <Col>
                                <Profile />
                            </Col>
                            <Col>
                                <Profile />
                            </Col>
                        </Row>
                        <Row xs={1} md={3} id='row'>
                            <Col>
                                <Profile />
                            </Col>
                            <Col>
                                <Profile />
                            </Col>
                            <Col>
                                <Profile />
                            </Col>
                        </Row>
                    </Container>

                </div>
            </div>
        )
    }
}