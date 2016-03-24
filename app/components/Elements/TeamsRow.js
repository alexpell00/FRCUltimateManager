/*
* @Author: alexpelletier
* @Date:   2016-03-21 12:16:46
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-23 22:20:08
*/
import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

var TeamsRow = React.createClass({
  render: function() {
    return (
		<tr>
		    <td>{this.props.team._id}</td>
		    <td><Link to={'/Scouting/Team/'+this.props.team._id}><span className="fw-semi-bold" style={{color: 'white'}}>{this.props.team.number}</span></Link></td>
		    <td>{this.props.team.name}</td>
		    <td>{this.props.team.location}</td>
		    <td>{this.props.team.region}</td>
		    <td></td>
		</tr>
	);
  }
});

module.exports = TeamsRow;