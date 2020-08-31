import React, { Component } from 'react';
import './../styles/about.css';
import Header from './header.js'
import Footer from './footer.js'

class Home extends Component {
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
                About Page
                <Footer />
            </div>
        );
    }
}

export default Home;
