import React, { Component } from 'react';
import styles from './../styles/home.css';
import Header from './header.js'
import Footer from './footer.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import profile_pic from './../images/dp.jpeg';
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
                            <img src={profile_pic} alt="profile-pic"/>
                        </Col>
                        <Col>
                            <Row>
                                <b><i>“The most valuable of all talents is that of never using two words when one will do.”</i></b>
                            </Row>
                            <br />
                            <hr />
                            <br />
                            <Row>
                                <Flippy
                                    flipOnHover={true}
                                    flipOnClick={true}
                                    flipDirection="horizontal"
                                    ref={(r) => this.flippy = r}
                                    style={{ width: "100%", height: "100%" }}
                                >
                                    <FrontSide
                                         style={{
                                            backgroundColor: 'black',
                                            color: 'white'
                                         }}
                                    >
                                        Technically inclined individual  with good communication, math, and computer skills.
                                        Graduated from IIIT Lucknow (2016 - 2020) and currently working as a Software Development
                                        Engineer - I at Acko General Insurance since January 2020.
                                    </FrontSide>
                                    <BackSide
                                        style={{
                                            backgroundColor: 'black',
                                            color: 'white'
                                        }}
                                    >
                                        Technically inclined individual  with good communication, math, and computer skills.
                                        Graduated from IIIT Lucknow (2016 - 2020) and currently working as a Software Development
                                        Engineer - I at Acko General Insurance since January 2020.
                                    </BackSide>
                                </Flippy>
                            </Row>
                            <br />
                            <hr />
                            <br />
                            <Row>
                                <div>
                                    <a href="#">Skills</a>
                                    <a href="#">Projects</a>
                                    <a href="#">Education</a>
                                    <a href="#">Experience</a>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <h6> Vijay Giri </h6>
                            <h6> Software Development Engineer-I @ Acko </h6>
                            <h6> Bengaluru </h6>
                        </Col>
                        <Col>
                            <h6> girivijay009@gmail.com </h6>
                            <h6> +91-9453834673, +91-7310055702 </h6>
                            <h6> 17 Vasundhara Vihar Ganne Ka Purwa Ring Road Lucknow, Uttar Pradesh, 226022 </h6>
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
