/*
* @Author: alexpelletier
* @Date:   2016-03-20 16:01:58
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-21 20:00:31
*/


import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

var Header = React.createClass({
  render: function() {
    return (
      <header className="page-header">
            <div className="navbar">
                <ul className="nav navbar-nav navbar-right pull-right">
                    <li className="visible-phone-landscape">
                        <a href="#" id="search-toggle">
                            <i className="fa fa-search"></i>
                        </a>
                    </li>
                    <li className="dropdown">
                        <a href="#" title="Messages" id="messages"
                           className="dropdown-toggle"
                           data-toggle="dropdown">
                            <i className="fa fa-comments"></i>
                        </a>
                        <ul id="messages-menu" className="dropdown-menu messages" role="menu">
                            <li role="presentation">
                                <a href="#" className="message">
                                    <img src="img/1.jpg" alt=""/>
                                    <div className="details">
                                        <div className="sender">Jane Hew</div>
                                        <div className="text">
                                            Hey, John! How is it going? ...
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="#" className="text-align-center see-all">
                                    See all messages <i className="fa fa-arrow-right"></i>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#" title="8 support tickets"
                           className="dropdown-toggle"
                           data-toggle="dropdown">
                            <i className="fa fa-group"></i>
                            <span className="count">8</span>
                        </a>
                        <ul id="support-menu" className="dropdown-menu support" role="menu">
                            <li role="presentation">
                                <a href="#" className="support-ticket">
                                    <div className="picture">
                                        <span className="label label-important"><i className="fa fa-bell-o"></i></span>
                                    </div>
                                    <div className="details">
                                        Check out this awesome ticket
                                    </div>
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="#" className="text-align-center see-all">
                                    See all tickets <i className="fa fa-arrow-right"></i>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="divider"></li>
                    <li className="hidden-xs">
                        <Link to="/Managment/AccountSettings" activeStyle={{color: 'white'}} title="Account" id="account">
                            <i className="fa fa-user"></i>
                        </Link>
                    </li>
                    <li className="visible-xs">
                        <a href="#"
                           className="btn-navbar"
                           data-toggle="collapse"
                           data-target=".sidebar"
                           title="">
                            <i className="fa fa-bars"></i>
                        </a>
                    </li>
                    <li className="hidden-xs"><a href="\Api\Logout"><i className="fa fa-sign-out"></i></a></li>
                </ul>
                <form id="search-form" className="navbar-form pull-right" role="search">
                    <input type="search" className="form-control search-query" placeholder="Search..."/>
                </form>
            </div>
        </header>   
    );
  }
});

module.exports = Header;