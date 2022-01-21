import { React, Component } from "react";
import { Card } from 'react-bootstrap';
import './Profile.css';

export default class Profile extends Component {
    render() {
        return (
            <div>
                <Card id="card">
                    <Card.Img variant="top" src={require("../../Media/Images/Carousel/Dog.jpg")} />
                    <Card.Body>
                        <Card.Title>Club Head Name</Card.Title>
                        <Card.Text>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}