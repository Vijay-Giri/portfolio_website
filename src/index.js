import React from 'react';
import { render } from 'react-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Root = () => (
    <Router forceRefresh>
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
        </Switch>
    </Router>
);

render(<Root />, document.getElementById('root'));
