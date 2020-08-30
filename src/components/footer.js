import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './../styles/footer.css';
import {
    faFacebook,
    faInstagram,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    render() {
        return (
            <div className={styles.footerBody}>
                <a
                    href="https://www.linkedin.com/in/vijay-giri-11b1b4154/"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="1x" />
                </a>
                <a
                    href="https://www.facebook.com/girivijay008"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faFacebook} size="1x" />
                </a>
                <a
                    href="https://www.instagram.com/girivijay008/"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                </a>
            </div>
        );
    }
}

export default Footer;
