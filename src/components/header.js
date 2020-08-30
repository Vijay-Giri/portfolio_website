import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Vijay Giri",
        }
    }
    render() {
        return (
            <Container className="p-0" fluid={true}>
                <Navbar className="border-bottom" bg="transparent" expand="lg">
                    <Navbar.Brand> {this.state.title} </Navbar.Brand>
                    <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                    <Navbar.Collapse id="navbar-toggle">
                        <Nav className="ml-auto">
                            <Link className="nav-link" to="/"> Home </Link>
                            <Link className="nav-link" to="/about"> About </Link>
                            <Link className="nav-link" to="/contact"> Contact </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
}

export default Header;
