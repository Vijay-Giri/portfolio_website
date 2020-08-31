import React from 'react';
import { render } from 'react-dom';
import Home from './components/home.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Root = () => (
    <Router forceRefresh>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/about'>
                <About />
            </Route>
            <Route exact path='/contact'>
                <Contact />
            </Route>
        </Switch>
    </Router>
);

render(<Root />, document.getElementById('root'));
