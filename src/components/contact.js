import React, { Component } from 'react';
import './../styles/contact.css';
import Header from './header.js'
import Footer from './footer.js'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title
        }
    }
    componentDidMount() {
        document.title = this.state.title
    }
    render() {
        return (
            <div>
                <Header />
                    Contact Page
                <Footer />
            </div>
        );
    }
}

export default Contact;
