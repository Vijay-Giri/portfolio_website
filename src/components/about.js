import React, { Component } from 'react';
import './../styles/about.css';
import Header from './header.js'
import Footer from './footer.js'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                About Page
                <Footer />
            </div>
        );
    }
}

export default Home;
