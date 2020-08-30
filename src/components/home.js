import React, { Component } from 'react';
import './../styles/home.css';
import Header from './header.js'
import Footer from './footer.js'

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
