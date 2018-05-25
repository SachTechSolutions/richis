import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '.././src/pages/Main';
import Events from '.././src/pages/Events';
import logo from '.././src/images/logo/logo.png';
import mobilelogo from '.././src/images/logo/mobilelogo.png';
class App extends Component {
    render() {
        return (
            <Router>
                <div>

                    <div className="nav-container">
                        <nav className="top-bar overlay-bar">
                            <div className="container">
                                <div className="row nav-menu">
                                    <div className="col-sm-3 col-md-2 columns">
                                        <a href=".">
                                            <img className="logo logo-light" alt="Logo" src={logo}/>
                                            <img className="logo logo-dark" alt="Logo" src={mobilelogo}/>
                                        </a>
                                    </div>

                                    <div className="col-sm-9 col-md-10 columns mobile-view">
                                        <ul className="menu">
                                            <li className=""><a href="https://date-app.herokuapp.com">Happy Report</a>
                                            </li>
                                            <li className=""><a href="https://date-app.herokuapp.com">Richies Column</a>
                                            </li>
                                            <li className=""><a  href="https://date-app.herokuapp.com">Price</a>
                                            </li>
                                            <li><Link to={'/Events'}>Events</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mobile-toggle">
                                    <i className="icon icon_menu"/>
                                </div>

                            </div>
                            {/* end of container */}
                        </nav>
                    </div>


                    <Switch>
                        <Route exact path='/Events' component={Events} />
                        <Route exact path='/' component={Home} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;