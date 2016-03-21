/*
* @Author: alexpelletier
* @Date:   2016-03-20 16:01:58
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-20 16:35:40
*/


import React from 'react';

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
                                <a href="#" className="message">
                                    <img src="img/2.jpg" alt=""/>
                                    <div className="details">
                                        <div className="sender">Alies Rumiancaŭ</div>
                                        <div className="text">
                                            I'll definitely buy this template
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="#" className="message">
                                    <img src="img/3.jpg" alt=""/>
                                    <div className="details">
                                        <div className="sender">Michał Rumiancaŭ</div>
                                        <div className="text">
                                            Is it really Lore ipsum? Lore ...
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
                                <a href="#" className="support-ticket">
                                    <div className="picture">
                                        <span className="label label-warning"><i className="fa fa-question-circle"></i></span>
                                    </div>
                                    <div className="details">
                                        "What is the best way to get ...
                                    </div>
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="#" className="support-ticket">
                                    <div className="picture">
                                        <span className="label label-success"><i className="fa fa-tag"></i></span>
                                    </div>
                                    <div className="details">
                                        This is just a simple notification
                                    </div>
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="#" className="support-ticket">
                                    <div className="picture">
                                        <span className="label label-info"><i className="fa fa-info-circle"></i></span>
                                    </div>
                                    <div className="details">
                                        12 new orders has arrived today
                                    </div>
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="#" className="support-ticket">
                                    <div className="picture">
                                        <span className="label label-important"><i className="fa fa-plus"></i></span>
                                    </div>
                                    <div className="details">
                                        One more thing that just happened
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
                        <a href="#" id="settings"
                           title="Settings"
                           data-toggle="popover"
                           data-placement="bottom">
                            <i className="fa fa-cog"></i>
                        </a>
                    </li>
                    <li className="hidden-xs dropdown">
                        <a href="#" title="Account" id="account"
                           className="dropdown-toggle"
                           data-toggle="dropdown">
                            <i className="fa fa-user"></i>
                        </a>
                        <ul id="account-menu" className="dropdown-menu account" role="menu">
                            <li role="presentation" className="account-picture">
                                <img src="img/2.jpg" alt=""/>
                                Philip Daineka
                            </li>
                            <li role="presentation">
                                <a href="form_account.html" className="link">
                                    <i className="fa fa-user"></i>
                                    Profile
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="component_calendar.html" className="link">
                                    <i className="fa fa-calendar"></i>
                                    Calendar
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="#" className="link">
                                    <i className="fa fa-inbox"></i>
                                    Inbox
                                </a>
                            </li>
                        </ul>
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
                    <li className="hidden-xs"><a href="login.html"><i className="fa fa-sign-out"></i></a></li>
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