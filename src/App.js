import React, { Component } from 'react';
import { Router, browserHistory, Route} from 'react-router';
import './App.css';
import Main from './pages/Main';

const Home = (props) => (
    <Main title="Home" />
);


class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home}/>

            </Router>
        );
    }
}

export default App;
