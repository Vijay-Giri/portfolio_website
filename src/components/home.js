import React, { Component } from 'react';
import './../styles/home.css';
import Header from './header.js'
import Footer from './footer.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile_pic from './../images/profile_pic.jpeg';

class Home extends Component {
    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row>
                        <Header />
                    </Row>
                    <Row className="border-top justify-content-between p-3">
                        <Col className="p-0">
                            <img src={profile_pic} alt="profile-pic" width="420px" height="650px"/>
                        </Col>

                    </Row>
                    <Row>
                        <Footer />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;
