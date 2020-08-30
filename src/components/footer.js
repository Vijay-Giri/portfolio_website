import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './../styles/footer.css';
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    render() {
        return (
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0">
                        <a
                            href="https://www.linkedin.com/in/vijay-giri-11b1b4154/"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a
                            href="https://github.com/Vijay-Giri"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a
                            href="https://www.facebook.com/girivijay008"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a
                            href="https://www.instagram.com/girivijay008/"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;
