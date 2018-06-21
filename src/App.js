import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '.././src/pages/Main';
import Events from '.././src/pages/Events';
import Price from '.././src/pages/Price';
import BasicRegister from '.././src/pages/BasicRegister';
import logo from '.././src/images/logo/logo.png';
import mobilelogo from '.././src/images/logo/mobilelogo.png';
import DetailRegister from "./pages/DetailRegister";
import Signup from "./pages/Signup";
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
                                            <li className=""><a href=".">Happy Report</a>
                                            </li>
                                            <li className=""><a href=".">Richies Column</a>
                                            </li>
                                            <li><Link to={'/Price'}>Price</Link></li>
                                            <li><Link to={'/Events'}>Events</Link></li>
                                            <li><Link to={'/Signup'}>Register</Link></li>
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
                        <Route exact path='/Signup' component={Signup} />
                        <Route exact path='/BasicRegister' component={BasicRegister} />
                        <Route exact path='/DetailRegister' component={DetailRegister} />
                        <Route exact path='/Price' component={Price} />
                        <Route exact path='/Events' component={Events} />
                        <Route exact path='/' component={Home} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;