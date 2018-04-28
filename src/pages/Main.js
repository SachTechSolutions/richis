/**
 * Created by SachTech on 28-04-2018.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import logo from '../images/logo.png';

class Main extends React.Component {
    render() {
        return (
            <body className="home-page bp-legacy home page-template page-template-page-templates page-template-front-page page-template-page-templatesfront-page-php page page-id-8 pmpro-body-has-access elementor-default no-js">
            <div className="kleo-page wide-style">
                <header>
                    <div className="header-bg clearfix">
                        <div id="header">
                            <div className="row">
                                <div className="four columns">
                                    <div id="logo">Sweet Date <a href="#">
                                        <img id="logo_img"
                                             src={logo}
                                             width="294" height="108" alt="Sweet Date"/>
                                    </a>
                                    </div>
                                </div>
                                <div className="eight columns login-buttons">
                                    <ul className="button-group radius right">

                                        <li className="header-login-button">
                                            <a href="#" data-reveal-id="" className="tiny secondary button radius">
                                                <i className="icon-user hide-for-medium-down"/>
                                                LOG IN </a>
                                        </li>

                                        <li className="header-register-button">
                                            <a href="#" data-reveal-id="" className="tiny button radius">
                                                <i className="icon-group hide-for-medium-down"></i>
                                                SIGN UP </a>
                                        </li>

                                    </ul>
                                </div>
                                <div className="eight columns">
                                    <div className="contain-to-grid sticky">
                                        <nav className="top-bar">
                                            <a href="#" className="small-logo"><img
                                                src="https://seventhqueen.com/demo/sweetdatewp-modern/wp-content/themes/sweetdate/assets/images/small_logo.png"
                                                height="43" alt="Sweet Date"/></a>
                                            <ul>
                                                <li className="name">
                                                    <h1><a href="#">Please select your page</a>
                                                    </h1>
                                                </li>
                                                <li className="toggle-topbar"><a href="#"><i className="icon-reorder"></i></a></li>
                                            </ul>

                                            <section>
                                                <ul id="menu-sweetdate" className="left">
                                                    <li id="nav-menu-item-918"><a href="#"
                                                                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-8 current_page_item main-menu-link">Home</a>
                                                    </li>
                                                    <li id="nav-menu-item-971" className="has-dropdown"><a href="#"
                                                                                                       className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children main-menu-link">Features</a>
                                                        <ul className="dropdown">
                                                            <li id="nav-menu-item-917"><a href="#"
                                                                                          className="menu-item menu-item-type-post_type menu-item-object-page sub-menu-link">Blog</a>
                                                            </li>
                                                            <li id="nav-menu-item-960"><a href="#"
                                                                                          className="menu-item menu-item-type-post_type menu-item-object-page sub-menu-link">About
                                                                us</a>
                                                            </li>
                                                            <ul className="dropdown">
                                                                <li id="nav-menu-item-865"><a href="#"
                                                                                              className="menu-item menu-item-type-custom menu-item-object-custom sub-menu-link">Sample</a>
                                                                </li>
                                                                <li id="nav-menu-item-866"><a href="#"
                                                                                              className="menu-item menu-item-type-custom menu-item-object-custom sub-menu-link">Sample
                                                                    link</a>
                                                                </li>
                                                            </ul>
                                                        </ul>
                                                    </li>
                                                    <li id="nav-menu-item-952"><a
                                                        href="https://seventhqueen.com/demo/sweetdatewp-modern/contact/"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page sub-menu-link">Contact</a>
                                                    </li>


                                            <li id="nav-menu-item-858" className="has-dropdown"><a
                                                href="#"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children main-menu-link">Price</a>
                                            </li>
                                            <li id="nav-menu-item-857" className="has-dropdown"><a href="#"
                                                                                               className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children main-menu-link">Blogs</a>
                                            </li>

                                            <li id="nav-menu-item-989"><a
                                                href="#"
                                                className="menu-item menu-item-type-custom menu-item-object-custom main-menu-link">Contact</a></li>
                                            <li id="nav-menu-item-search" className="menu-item kleo-menu-item-search"><a
                                                className="search-trigger" href="#"><i className="icon icon-search"/></a>
                                                <div className="searchHidden" id="ajax_search_container">
                                                    <form action="#"
                                                          id="ajax_searchform" method="get" className="custom">
                                                        <div className="row collapse">
                                                            <div className="nine columns">
                                                                <input autocomplete="off" type="text" id="ajax_s" name="s"
                                                                       value=""/>
                                                            </div>
                                                            <div className="three columns">
                                                                <button id="kleo_ajaxsearch"
                                                                        className="button radius small secondary expand postfix">
                                                                    <i className="icon icon-search"></i></button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div className="kleo_ajax_results"></div>
                                                </div>


                                            </li>
                                                </ul>

                                    </section>
                                </nav>
                            </div>
                        </div>

                    </div>

                    <div className="row just-after-header">
                        <div className="twelve columns">
                            <div className="row">
                                <div className="five columns">

                                    <div className="form-wrapper">
                                        <div className="form-header">
                                            <h4 className="white-text">
                                                Create an Account </h4>
                                            <p className="reg-form-details">
                                                Registering for this site is easy, just fill in the fields below and we will
                                                get a new account set up for you in no time. </p>
                                        </div>

                                        <form id="register_form_front"
                                              action="https://seventhqueen.com/demo/sweetdatewp-modern/register/"
                                              method="post" className="custom form-search">

                                            <div className="row">
                                                <div className="five mobile-four columns">
                                                    <label className="right inline">Username:</label>
                                                </div>
                                                <div className="seven mobile-four columns">
                                                    <input name="signup_username" required="required" type="text"
                                                           placeholder="Required"/>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="five mobile-four columns">
                                                    <label className="right inline">Email Address:</label>
                                                </div>
                                                <div className="seven mobile-four columns">
                                                    <input name="signup_email" type="text" required="required"
                                                           placeholder="Required"/>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="five mobile-one columns">
                                                    <label className="right inline">Password:</label>
                                                </div>
                                                <div className="three mobile-one columns">
                                                    <input type="password" name="signup_password" required="required"
                                                           placeholder="Required"/>
                                                </div>
                                                <div className="one mobile-one columns text-center">
                                                    <label className="inline"></label>
                                                </div>
                                                <div className="three mobile-one columns">
                                                    <input type="password" name="signup_password_confirm"
                                                           required="required" placeholder="Confirm"/>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="seven offset-by-five columns">
                                                    <button className="button radius front-form-button"><i
                                                        className="icon-user"></i> &nbsp;Sign Up
                                                    </button>
                                                    <a href="#" className="facebook_connect radius button facebook"><i
                                                        className="icon-facebook"></i></a>
                                                </div>
                                            </div>
                                            <span className="notch"></span>
                                        </form>

                                        <div className="form-footer">
                                            <strong>Latest registered members</strong>
                                            <div className="kleo_members_carousel "><p><span className="right hide-for-small"><a
                                                href="#" className="profile-thumbs-prev"><i
                                                className="icon-circle-arrow-left icon-large"></i></a>&nbsp;<a href="#"
                                                                                                           className="profile-thumbs-next"><i
                                                className="icon-circle-arrow-right icon-large"></i></a></span></p>
                                                <div className="clearfix"></div>
                                                <div className="carousel-profiles responsive">
                                                    <ul className="profile-thumbs">
                                                        <li>
                                                            <a href="#"><img
                                                                src='https://graph.facebook.com/10211329965703458/picture?width=580&amp;height=580'
                                                                className=" user-45150-avatar avatar-94 photo" width="94"
                                                                height="94"
                                                                alt="Profile picture of jean-yves-able"/></a></li>
                                                        <li>
                                                            <a href="#"><img
                                                                src='https://graph.facebook.com/169429173760852/picture?width=580&amp;height=580'
                                                                className=" user-45149-avatar avatar-94 photo" width="94"
                                                                height="94"
                                                                alt="Profile picture of marros-saldanha"/></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
          </header>
    </div>
    </body>

    )}
    }
    export default Main;