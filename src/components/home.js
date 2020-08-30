import React, { Component } from 'react';
import './../styles/Home.css';
import Header from './Header.js'
import Footer from './Footer/Footer.js'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}

export default Home;
