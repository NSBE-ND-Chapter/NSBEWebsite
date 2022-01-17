
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default class ContactUs extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={2}>1 of 3</Col>
                        <Col>
                            <h1>Contact Us</h1>
                            <p>This is contact US.</p>
                            <br>
                            </br>
                            <Form>
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                                    <Form.Label column sm={2}>
                                        Name
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="Name" placeholder="Name" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        Email
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="Email" placeholder="Email" />
                                    </Col>
                                </Form.Group>
                                <fieldset>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label as="legend" column sm={2}>
                                            Concern
                                        </Form.Label>
                                        <Col sm={8}>
                                            <Form.Check
                                                type="radio"
                                                label="Convention"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="NSBE Club Activities"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Joining NSBE Board"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios3"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Other"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios4"
                                            />

                                        </Col>
                                    </Form.Group>
                                </fieldset>

                                <Form.Group as={Row} className="mb-2" controlId="exampleForm.ControlTextarea1">

                                    <Form.Label column sm={2} >Please Explain Concern</Form.Label>

                                    <Col sm={8}>
                                        <Form.Control as="textarea" rows={3} />
                                    </Col>
                                </Form.Group>



                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                                    <Col sm={{ span: 10, offset: 2 }}>
                                    <Form.Check
                                        required
                                        label="Agree to terms and conditions"
                                        feedback="You must agree before submitting."
                                        feedbackType="invalid"
                                    />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Col sm={{ span: 10, offset: 2 }}>
                                        <Button type="submit">Sign in</Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col sm={2}> 3 of 3</Col>
                    </Row>
                </Container>



            </div>
        )
    }
}