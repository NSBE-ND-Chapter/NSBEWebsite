import { React, Component } from "react";
import { Card } from 'react-bootstrap';
import './Profile.css';

export default class Profile extends Component {
    render() {
        return (
            <div>
                <Card id="card">
                    <Card.Img variant="top" src={this.props.image} id="image"/>
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            <p id="text">
                            {this.props.position}
                            </p>
                            {this.props.text}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}