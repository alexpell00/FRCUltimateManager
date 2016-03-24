/*
* @Author: alexpelletier
* @Date:   2016-03-24 04:58:31
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-24 05:25:37
*/

import React from 'react';

import ScemaDataEntryRow from './ScemaDataEntryRow'

var ScemaMatchDataEntry = React.createClass({
  render: function() {
  	var redTeams = [];
  	var blueTeams = [];
  	if (this.props.match){
	  	this.props.match.teams_blue.forEach(function(team){
	  		blueTeams.push(<div className='col-sm-4'> <p style={{marginTop: '10px',color:'lightblue'}}>{team.name} ({team.number})</p><ScemaDataEntryRow teamid={team._id} scemaInfo={this.props.scemaInfo} update={this.props.update}/> </div>)
	  	}.bind(this))
	  	this.props.match.teams_red.forEach(function(team){
	  		redTeams.push(<div className='col-sm-4'> <p style={{marginTop: '10px',color:'pink'}}>{team.name} ({team.number})</p><ScemaDataEntryRow teamid={team._id} scemaInfo={this.props.scemaInfo} update={this.props.update}/> </div>)
	  	}.bind(this))
	}
    return (
		<div className='row'>
			<br/><br/>
 			{blueTeams}
			{redTeams}
		</div>
    );
  }
});

module.exports = ScemaMatchDataEntry;