import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faGmail
} from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    render() {
        return (
            <div className="ml-auto">
                <a
                    href="https://www.linkedin.com/in/vijay-giri-11b1b4154/"
                    className="mr-2"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="1x" />
                </a>
                <a
                    href="https://www.facebook.com/girivijay008"
                    className="mr-2"
                >
                    <FontAwesomeIcon icon={faFacebook} size="1x" />
                </a>
                <a
                    href="https://www.instagram.com/girivijay008/"
                    className="mr-2"
                >
                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                </a>
            </div>
        );
    }
}

export default Footer;
