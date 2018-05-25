/**
 * Created by SachTech on 28-04-2018.
 */

import React, {Component} from 'react';
import footerlogo from '../images/logo/footer-logo.png';
import header_love from '../images/header_love.jpg';
import event_mobile from '../images/event_mobile.png';
import grey_bg from '../images/grey-bg.jpg';
import richie_screen from '../images/richies-screen.png';
import appstore from '../images/icons/app-store.png';
import playstore from '../images/icons/google-play.png';
import fbimg from '../images/icons/login_button_a.png';


class Price extends Component {
    render() {
        return (
            <body>
            <div className="main-container">
                <header className="page-header">
                    <div className="background-image-holder parallax-background">
                        <img className="background-image" alt="Background Image" src={header_love}/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <h1 className="clr-darkred">Price</h1>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="video-inline">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-12">
                                <h1 className="space-bottom-medium">Why is Richies a service offered for a fee?</h1>
                                <p className="lead space-bottom-medium">
                                    Registration of Richies is free.

                                    However, in order to provide more secure and safe service and operate a clean
                                    meeting place, we are offering services for a fee.

                                    As a result, in order to seriously "want to find a marriage partner" or "want to
                                    find a lover", we are planning to strengthen posting monitoring and customer support
                                    on a 24-hour system and to improve all functions I am able to prepare.
                                </p>
                            </div>

                            <div className="col-md-4 col-sm-12">
                                <div className="inline-video-wrapper">
                                    <img src={event_mobile}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pricing-1 bg-secondary-15">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <h1 className="text-white">Super simple pricing that scales with your usage</h1>
                            </div>
                        </div>

                        <div className="row clearfix pricing-tables">
                            <div className="col-md-3  col-sm-6 no-pad-right">
                                <div className="pricing-table">
                                    <div className="price">
                                        <span className="sub">yen </span>
                                        <span className="amount">3,480 </span>
                                        <span className="sub">/month </span>
                                    </div>
                                    <ul className="features">
                                        <li><strong>Paid members</strong> (for men members only)</li>
                                    </ul>
                                    <a href="." className="btn btn-primary btn-white">Sign Me Up</a>
                                </div>
                            </div>

                            <div className="col-md-3  col-sm-6 no-pad">
                                <div className="pricing-table">
                                    <div className="price">
                                        <span className="sub">yen </span>
                                        <span className="amount">2,980 </span>
                                        <span className="sub">/month </span>
                                    </div>
                                    <ul className="features">
                                        <li><strong>Premium option</strong> (for men members only)</li>
                                    </ul>
                                    <a href="." className="btn btn-primary btn-white">Sign Me Up</a>
                                </div>
                            </div>

                            <div className="col-md-3  col-sm-6 no-pad">
                                <div className="pricing-table emphasis">
                                    <div className="price">
                                        <span className="sub">yen </span>
                                        <span className="amount">2,900 </span>
                                        <span className="sub">/month </span>
                                    </div>
                                    <ul className="features">
                                        <li><strong>Ladies' option</strong> (women only)</li>
                                    </ul>
                                    <a href="." className="btn btn-primary btn-white">Sign Me Up</a>
                                </div>
                            </div>

                            <div className="col-md-3  col-sm-6 no-pad-left">
                                <div className="pricing-table">
                                    <div className="price">
                                        <span className="sub">yen </span>
                                        <span className="amount">2,480 </span>
                                        <span className="sub">/month </span>
                                    </div>
                                    <ul className="features">
                                        <li><strong>Private mode</strong>(for all members)</li>
                                    </ul>
                                    <a href="." className="btn btn-primary btn-white">Sign Me Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="duplicatable-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="feature feature-icon-large">
                                    <div className="pull-left">
                                        <i className="icon icon-genius"></i>
                                    </div>
                                    <div className="pull-right">
                                        <h5>About male paid members · premium option</h5>
                                        <p>
                                            In the case of AppleID settlement · Google Play settlement, the charge
                                            varies depending on Apple company · Google company regulations.
                                            Depending on the settlement method and plan, although the amount of money is
                                            different, the contents of the service to be provided will not change.
                                            Depending on the settlement method, the timing of returning to a free member
                                            may differ. In the case of credit card payment, it will be changed to a free
                                            member at the time of cancellation, but in the case of AppleID settlement,
                                            the period from the cancellation date to the next update date can also be a
                                            paid member.
                                            The premium option is an option service that only male customers can apply.
                                            Apart from paid membership fee, a fee of 2,980 yen per month (including tax)
                                            (4,100 yen (tax included) for Apple ID settlement, 3,000 yen (tax included)
                                            for Google Play settlement) occurs.
                                            When paid member registration date and premium option application date are
                                            different, it is good! The date of grant will be different. 30 times from
                                            the 31th day from the paid member registration date and 20 times from the
                                            premium option application date on the 31st day. In the case of Apple ID
                                            settlement or Google Play settlement, it is awarded one month from the paid
                                            member registration date and premium option application date respectively.
                                            Information settled by either method will be handed over in other
                                            environments.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <div className="feature feature-icon-large">
                                    <div className="pull-left">
                                        <i className="icon icon-linegraph"></i>
                                    </div>
                                    <div className="pull-right">
                                        <h5>About ladies option</h5>
                                        <p>
                                            The women's option is an optional service that only female members can
                                            apply.
                                            It depends on the settlement method! The date of grant will be different. In
                                            the case of credit card transactions, it will be granted 20 times on 31st
                                            day from the date of application for women's options. In the case of Apple
                                            ID settlement or Google Play settlement, it will be granted one month from
                                            the date of wear option application.
                                            Depending on the settlement method, the timing of returning to a free member
                                            may differ. In the case of credit card payment, it will be changed to a free
                                            member at the time of cancellation, but in the case of AppleID settlement,
                                            the function of the ladies option can also be used for the period from the
                                            cancellation date to the next update date.
                                            Information settled by either method will be handed over in other
                                            environments.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-sm-12">
                                <div className="feature feature-icon-large">
                                    <div className="pull-left">
                                        <i className="icon icon-tools-2"></i>
                                    </div>
                                    <div className="pull-right">
                                        <h5>About private mode</h5>
                                        <p>
                                            In the case of AppleID settlement · Google Play settlement, the charge
                                            varies depending on Apple company · Google company regulations.
                                            Depending on the settlement method and plan, although the amount of money is
                                            different, the contents of the service to be provided will not change.
                                            In case of cancellation, the end timing of function usage will differ
                                            depending on the settlement method at the time of application. In the case
                                            of credit card transactions, the use of functions will be terminated at the
                                            time of cancellation, but in the case of AppleID settlement, the private
                                            mode function can be used during the period from the cancellation date to
                                            the next update date.
                                            Information settled by either method will be handed over in other
                                            environments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="feature-divider">

                    <div className="background-image-holder"
                         data-scroll-reveal="wait 0.2s then enter 200px from bottom over 0.3s">
                        <img className="background-image" alt="Background" src={grey_bg}/>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5">
                                <h1>Register<span className="clr-orange"> Now </span> </h1>
                                <a href="https://date-app.herokuapp.com"><img src={fbimg} alt="fbico"/></a>
                                <p className="clr-darkred">How To Register Richies <a href="https://date-app.herokuapp.com">Terms & Condition</a> <a href="https://date-app.herokuapp.com">Privacy Policy</a> </p>
                                <a className="store-link" href="https://date-app.herokuapp.com"><img alt="Buy On App Store" src={appstore}/></a>
                                <a className="store-link" href="https://date-app.herokuapp.com"><img alt="Buy On App Store" src={playstore}/></a>
                            </div>

                            <div className="col-sm-7" data-scroll-reveal="enter from bottom and move 100px">
                                <img alt="App Screenshot" src={richie_screen}/>
                            </div>
                        </div>{/*end of row*/}
                    </div>
                </section>

            </div>


            <div className="footer-container">
                <footer className="short bg-secondary-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-10">
                                <img className="logo logo-light" alt="Logo" src={footerlogo}
                                     style={{width: 200 + 'px'}}/>
                                <span className="sub">© Copright 2014 Richies</span>
                                <ul>
                                    <li><a href="https://date-app.herokuapp.com">Terms Of Use</a></li>
                                    <li><a href="https://date-app.herokuapp.com">Privacy &amp; Security Statement</a>
                                    </li>
                                    <li><a href="https://date-app.herokuapp.com">Sitemap</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-2 text-right">
                                <ul className="social-icons">
                                    <li>
                                        <a href="https://date-app.herokuapp.com">
                                            <i className="icon social_twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://date-app.herokuapp.com">
                                            <i className="icon social_facebook"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/*end of row*/}
                    </div>
                    {/*end of container*/}
                </footer>
            </div>
            </body>
    )}
    }
    export default Price;