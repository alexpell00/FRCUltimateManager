/*
* @Author: alexpelletier
* @Date:   2016-03-20 15:30:15
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-22 00:44:41
*/

import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

const ACTIVE = { 'font-weight': 'bold' }

var Sidebar = React.createClass({
  render: function() {
    return (
      <nav id="sidebar" className="sidebar nav-collapse collapse">
            <ul id="side-nav" className="side-nav">
                <li className="">
                    <IndexLink to="/" activeClassName="active">
                        <i className="fa fa-home">
                        </i>
                        <span className="name">
                            Dashboard
                        </span>
                    </IndexLink>
                </li>
                <li className="">
                    <Link to="/Hours" activeClassName="active">
                        <i className="fa fa-hourglass-half">
                        </i>
                        <span className="name">
                            Hours
                        </span>
                    </Link>
                </li>
            </ul>
            

            <h5 className="sidebar-nav-title">
                Scouting
            </h5>
			<ul id="side-nav" className="side-nav">
			    <li className="">
			        <Link to="/Scouting/AddMatch" activeClassName="active">
			            <i className="fa fa-plus">
			            </i>
			            <span className="name">
			                Add match
			            </span>
			        </Link>
			    </li>
			    <li className="">
			        <Link to="/Scouting/AddPitScout" activeClassName="active">
			            <i className="fa fa-plus-square">
			            </i>
			            <span className="name">
			                Add Pit Scout
			            </span>
			        </Link>
			    </li>
			    <li className="">
			        <Link to="/Scouting/Compare" activeClassName="active">
			            <i className="fa fa-compress">
			            </i>
			            <span className="name">
			                Compare
			            </span>
			        </Link>
			    </li>
			    <li className="">
			        <Link to="/Scouting/Teams" activeClassName="active">
			            <i className="fa fa-user-secret">
			            </i>
			            <span className="name">
			                Teams
			            </span>
			        </Link>
			    </li>
			    <li className="">
			        <Link to="/Scouting/Matches" activeClassName="active">
			            <i className="fa fa-map-signs">
			            </i>
			            <span className="name">
			                Matches
			            </span>
			        </Link>
			    </li>
			    <li className="">
			        <Link to="/Scouting/Scema" activeClassName="active">
			            <i className="fa fa-th">
			            </i>
			            <span className="name">
			                Schema
			            </span>
			        </Link>
			    </li>
			</ul>
            
            <h5 className="sidebar-nav-title">
                Managment
            </h5>
			<ul id="side-nav" className="side-nav">
			    <li className="">
			        <Link to="/Managment/TeamMembers" activeClassName="active">
			            <i className="fa fa-users">
			            </i>
			            <span className="name">
			                Team Members
			            </span>
			        </Link>
			    </li>
			    <li className="">
			        <Link to="/Managment/Settings" activeClassName="active">
			            <i className="fa fa-cog">
			            </i>
			            <span className="name">
			                Settings
			            </span>
			        </Link>
			    </li>
			</ul>
        </nav>
    );
  }
});

module.exports = Sidebar;