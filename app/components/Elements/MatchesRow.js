/*
* @Author: alexpelletier
* @Date:   2016-03-21 12:12:04
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-24 05:52:25
*/

import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

var MatchesRow = React.createClass({
  render: function() {
    var blueTeams = [];
    this.props.match.teams_blue.forEach(function(team){
        blueTeams.push(<Link to={'/Scouting/Team/'+team._id}>{team.number}, </Link>);
    });

    var redTeams = [];
    this.props.match.teams_red.forEach(function(team){
        redTeams.push(<Link to={'/Scouting/Team/'+team._id} style={{color: 'pink'}}>{team.number}, </Link>);
    });
    return (
		<tr>
            <td>{this.props.match._id}</td>
            <td>{this.props.match.match_num}</td>
            <td><span className="fw-semi-bold">{this.props.match.key}</span></td>
            <td>{this.props.match.comp_level}</td>
            <td>{this.props.match.event.key}</td>
            <td>{this.props.match.time}</td>
            <td>
                <span style={{color: 'lightblue'}}>
                     {blueTeams}
                </span>
                <span style={{color: 'pink'}}>
                     {redTeams} 
                </span>
            </td>
        </tr>
    );
  }
});

module.exports = MatchesRow;