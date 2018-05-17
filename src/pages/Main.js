/**
 * Created by SachTech on 28-04-2018.
 */

import React, {Component} from 'react';
import logo from '../images/logo/logo.png';
import footerlogo from '../images/logo/footer-logo.png';
import backgroundimg from '../images/background.jpg';
import appstore from '../images/icons/app-store.png';
import playstore from '../images/icons/google-play.png';
import fbimg from '../images/icons/login_button_a.png';
import couple from '../images/couple.png';
import richie_screen from '../images/richies-screen.png';
import single_mobile from '../images/register-mobile.png';
import related_1 from '../images/related-news/01.jpg';
import related_2 from '../images/related-news/02.jpg';
import related_3 from '../images/related-news/03.jpg';
import related_4 from '../images/related-news/04.jpg';
import related_5 from '../images/related-news/05.jpg';
import related_6 from '../images/related-news/06.jpg';
import choise_1 from '../images/why-choose/choise1.jpg';
import choise_2 from '../images/why-choose/choise2.jpg';
import choise_3 from '../images/why-choose/choise3.jpg';
import choise_4 from '../images/why-choose/choise4.jpg';
import choise_5 from '../images/why-choose/choise5.jpg';
import why_1 from '../images/why-choose/why1.jpg';
import why_2 from '../images/why-choose/why2.jpg';
import why_3 from '../images/why-choose/why3.png';


class Main extends Component {
    render() {
        return (
        <body>
            <div className="nav-container">
                <nav className="top-bar overlay-bar">
                    <div className="container">
                        <div className="row nav-menu">
                            <div className="col-sm-3 col-md-2 columns">
                                <a href="index.html">
                                    <img className="logo logo-light" alt="Logo" src={logo}/>
                                    <img className="logo logo-dark" alt="Logo" src={logo}/>
                                </a>
                            </div>

                            <div className="col-sm-9 col-md-10 columns">
                                <ul className="menu">
                                    <li className=""><a href="https://date-app.herokuapp.com">Happy Report</a>
                                    </li>
                                    <li className=""><a href="https://date-app.herokuapp.com">Richies Collumn</a>
                                    </li>
                                    <li className=""><a  href="https://date-app.herokuapp.com">Price</a>
                                    </li>
                                    <li className=""><a href="https://date-app.herokuapp.com">Events</a>
                                    </li>
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

            <div className="main-container">
                <header className="fullscreen-element no-pad centered-text">
                    <div className="background-image-holder parallax-background">
                        <img className="background-image" alt="Background" src={backgroundimg}/>
                    </div>

                    <div className="container align-vertical" >
                        <div className="row">
                            <div className="col-md-6 text-center pd-120">
                                <h1 className="alt-font clr-darkred" >Welcome To <span className="clr-orange"> Richies </span></h1>
                                <p className="clr-darkred">There is only one happiness in this life, to love and be loved.</p>
                                <p className="lead clr-darkred">Tons of elements, Consistent style, Variant builder included.</p>
                                <img src={richie_screen} alt="screen"/>
                            </div>
                            <div className="col-md-6 text-center pd-80">
                                <img src={couple} alt="couplee"/>
                                    <p className="clr-darkred">How To Register Richies <a href="https://date-app.herokuapp.com">Terms & Condition</a> <a href="https://date-app.herokuapp.com">Privacy Policy</a> </p>
                                    <a href="."><img src={fbimg} alt="facebookico"/></a>
                                    <a className="store-link" href="."><img src={playstore} alt="playstore"/></a>
                                    <a className="store-link" href="."><img src={appstore} alt="appstore"/></a>
                            </div>

                        </div>{/* end of row */}
                    </div>{/* end of container */}
                </header>

                <section className="blog-masonry bg-muted">

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <h1>Related <span className="clr-orange"> News </span></h1>
                            </div>
                        </div>{/* end of row */}
                    </div>{/* end of container */}

                    <div className="container">
                        <div className="row">
                            <div className="blog-masonry-container">

                                <div className="col-md-4 col-sm-6 blog-masonry-item branding">
                                    <div className="item-inner">
                                        <a href="https://date-app.herokuapp.com">
                                            <img alt="Blog Preview" src={related_1}/>
                                        </a>
                                        <div className="post-title">
                                            <h2>Layout out my writing gear as though I'll use it.</h2>
                                            <div className="post-meta">
                                                <span className="sub alt-font">Posted on June 16th</span>
                                                <span className="sub alt-font">4 Minute Read</span>
                                            </div>
                                            <a href="https://date-app.herokuapp.com" className="link-text">Read More</a>
                                        </div>
                                    </div>
                                </div>{/* end of individual post */}


                                <div className="col-md-4 col-sm-6 blog-masonry-item development">
                                    <div className="item-inner">
                                        <a href="https://date-app.herokuapp.com">
                                            <img alt="Blog Preview" src={related_2} />
                                        </a>
                                        <div className="post-title">
                                            <h2>Cooking up a batch of Ma's famous breadsticks</h2>
                                            <div className="post-meta">
                                                <span className="sub alt-font">Posted on June 13th</span>
                                                <span className="sub alt-font">4 Minute Read</span>
                                            </div>
                                            <a href="https://date-app.herokuapp.com" className="link-text">Read More</a>
                                        </div>
                                    </div>
                                </div>{/* end of individual post */}

                                <div className="col-md-4 col-sm-6 blog-masonry-item print">
                                    <div className="item-inner">
                                        <a href="https://date-app.herokuapp.com">
                                            <img alt="Blog Preview" src={related_3}/>
                                        </a>
                                        <div className="post-title">
                                            <h2>Wearing my trendy straw hat at the farm.</h2>
                                            <div className="post-meta">
                                                <span className="sub alt-font">Posted on June 11th</span>
                                                <span className="sub alt-font">4 Minute Read</span>
                                            </div>
                                            <a href="https://date-app.herokuapp.com" className="link-text">Read More</a>
                                        </div>
                                    </div>
                                </div>{/* end of individual post */}

                                <div className="col-md-4 col-sm-6 blog-masonry-item branding">
                                    <div className="item-inner">
                                        <a href="https://date-app.herokuapp.com">
                                            <img alt="Blog Preview" src={related_4} />
                                        </a>
                                        <div className="post-title">
                                            <h2>Happy snaps in my hand-made raft at sunset</h2>
                                            <div className="post-meta">
                                                <span className="sub alt-font">Posted on June 8th</span>
                                                <span className="sub alt-font">2 Minute Read</span>
                                            </div>
                                            <a href="https://date-app.herokuapp.com" className="link-text">Read More</a>
                                        </div>
                                    </div>
                                </div>{/* end of individual post */}

                                <div className="col-md-4 col-sm-6 blog-masonry-item print">
                                    <div className="item-inner">
                                        <a href="https://date-app.herokuapp.com">
                                            <img alt="Blog Preview" src={related_5}/>
                                        </a>
                                        <div className="post-title">
                                            <h2>Wearing my trendy straw hat at the farm.</h2>
                                            <div className="post-meta">
                                                <span className="sub alt-font">Posted on June 11th</span>
                                                <span className="sub alt-font">4 Minute Read</span>
                                            </div>
                                            <a href="https://date-app.herokuapp.com" className="link-text">Read More</a>
                                        </div>
                                    </div>
                                </div>{/* end of individual post */}

                                <div className="col-md-4 col-sm-6 blog-masonry-item branding">
                                    <div className="item-inner">
                                        <a href="https://date-app.herokuapp.com">
                                            <img alt="Blog Preview" src={related_6}/>
                                        </a>
                                        <div className="post-title">
                                            <h2>Happy snaps in my hand-made raft at sunset</h2>
                                            <div className="post-meta">
                                                <span className="sub alt-font">Posted on June 8th</span>
                                                <span className="sub alt-font">2 Minute Read</span>
                                            </div>
                                            <a href="https://date-app.herokuapp.com" className="link-text">Read More</a>
                                        </div>
                                    </div>
                                </div>{/* end of individual post */}
                            </div>{/* end of blog masonry container */}
                        </div>{/* end of row */}
                    </div>{/*end of container*/}
                </section>


                <section className="duplicatable-content">

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1>What We Choose <span className="clr-orange">Richies</span></h1>
                            </div>
                        </div>{/*end of row*/}

                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="feature feature-icon-large">
                                    <img src={choise_1} alt="what choose"/>
                                        <h3>1.Consistent Typography</h3>

                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="feature feature-icon-large">
                                    <img src={choise_2} alt="what choose"/>
                                        <h3>2. Varied Element Set</h3>

                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="feature feature-icon-large">
                                    <img src={choise_3} alt="what choose"/>
                                        <h3>3. Variant Builder</h3>

                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <div className="feature feature-icon-large">
                                    <img src={choise_4} alt="what choose"/>
                                        <h3>4. Consistent Typography</h3>

                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <div className="feature feature-icon-large">
                                    <img src={choise_5} alt="what choose"/>
                                        <h3>5. Varied Element Set</h3>

                                </div>
                            </div>
                        </div>{/*end of row*/}
                    </div>
                </section>

                <section className="feature-divider">

                    <div className="background-image-holder" data-scroll-reveal="wait 0.2s then enter 200px from bottom over 0.3s">
                        <img className="background-image" alt="Background" src="img/grey-bg.jpg"/>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5">
                                <h1>How To <span className="clr-orange">Register </span></h1>
							    <a href='https://date-app.herokuapp.com'>
							    <img src={fbimg} alt="fbico"/>
                                    <p className="clr-darkred">How To Register Richies <a href='https://date-app.herokuapp.com'>Terms & Condition</a>
                                    <a href="https://date-app.herokuapp.com">Privacy Policy</a> </p>
                                    <a className="store-link" href="https://date-app.herokuapp.com"><img alt="Buy On App Store" src={appstore}/></a>
                                    <a className="store-link" href="https://date-app.herokuapp.com"><img alt="Buy On App Store" src={playstore}/></a>
                                </a>
                            </div>

                            <div className="col-sm-7" data-scroll-reveal="enter from bottom and move 100px">
                                <img alt="App Screenshot" src={single_mobile}/>
                            </div>
                        </div>{/*end of row*/}
                    </div>
                </section>


                <section className="duplicatable-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1>Why Richies is <span className="clr-orange">  Chosen</span></h1>
                            </div>
                        </div>{/*end of row*/}

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="feature feature-icon-large">
                                    <div className="pull-left">
                                        <img src={why_1} alt="why choose"/>
                                    </div>
                                    <div className="pull-right pd-25">
                                        <h5>Distinct Visual Style</h5>
                                        <p>
                                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
                                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
                                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <div className="feature feature-icon-large">
                                    <img src={why_2} alt="why choose" style={{float: 'right'}} />
                                        <div className="pd-25">
                                            <h5>Multiple Demos</h5>
                                            <p>
                                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
                                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
                                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
                                            </p>
                                        </div>

                                </div>
                            </div>

                            <div className="col-sm-12">
                                <div className="feature feature-icon-large">
                                    <div className="pull-left">
                                        <img src={why_3} alt="why choose"/>
                                    </div>
                                    <div className="pull-right pd-25">
                                        <h5>Distinct Visual Style</h5>
                                        <p>
                                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
                                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
                                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="feature-divider">

                    <div className="background-image-holder" data-scroll-reveal="wait 0.2s then enter 200px from bottom over 0.3s">
                        <img className="background-image" alt="Background" src="img/grey-bg.jpg"/>
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
                                <img className="logo logo-light" alt="Logo" src={footerlogo} style={{width: 200+'px'}}  />
                                    <span className="sub">© Copright 2014 Richies</span>
                                    <ul>
                                        <li><a href="https://date-app.herokuapp.com">Terms Of Use</a></li>
                                        <li><a href="https://date-app.herokuapp.com">Privacy &amp; Security Statement</a></li>
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
                        </div>{/*end of row*/}
                    </div>{/*end of container*/}
                </footer>
            </div>
        </body>
    )}
    }
    export default Main;