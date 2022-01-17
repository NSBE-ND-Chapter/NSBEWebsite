import { React, Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from '../../Pages/Home/Home';
import ContactUs from '../../Pages/ContactUs/ContactUs';
import { Route, Routes, Link } from 'react-router-dom';



export default class Navigation extends Component {
    render() {
        return (
                <div>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand href="/home">NBSE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/contact'>Contact Us</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <Routes>
                    <Route path = "/home" element={<Home/>}></Route>
                    <Route path = "/contact" element={<ContactUs/>}></Route>
                    <Route path = "/" element={<Home/>}></Route>
                </Routes>
            </div>
            </div>
            
        );
    }
}