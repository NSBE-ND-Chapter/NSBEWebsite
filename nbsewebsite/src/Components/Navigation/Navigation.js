import { React, Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from '../../Pages/Home/Home';
import ContactUs from '../../Pages/ContactUs/ContactUs';
import Events from '../../Pages/Events/Events';
import AboutUs from '../../Pages/AboutUs/AboutUs';
import { Route, Routes, Link } from 'react-router-dom';
import './Navigation.css';



export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg" variant='dark'>
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={require("../../Media/Images/logo.png")} alt='NSBE Logo'/>
                            <b>UNIVERSITY OF NOTRE DAME NSBE CHAPTER</b>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                                    <Nav.Link as={Link} to='/events'>Events</Nav.Link>
                                    <Nav.Link as={Link} to='/about'>About Us</Nav.Link>
                                    <Nav.Link as={Link} to='/contact'>Contact Us</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div>
                    <Routes>
                        {/*<Route path="/home" element={<Home />}></Route>*/}
                        <Route path="/events" element={<Events />}></Route>
                        <Route path="/about" element={<AboutUs />}></Route>
                        <Route path="/contact" element={<ContactUs />}></Route>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </div>
            </div>

        );
    }
}