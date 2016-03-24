/*
* @Author: alexpelletier
* @Date:   2016-03-20 16:24:37
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-24 05:38:31
*/

import React from 'react';
import request from 'superagent';
import Select from 'react-select';
import { Link, hashHistory } from 'react-router';

// import ScemaDataEntryRow from '../Elements/ScemaDataEntry/ScemaDataEntryRow'
import ScemaMatchDataEntry from '../Elements/ScemaDataEntry/ScemaMatchDataEntry'

var AddMatch = React.createClass({
	getInitialState() {
		return {scemaInfos:{},scemaData: {},matches:{},activeMatch:{}};
	},
	componentDidMount() {
		request
            .get('/Api/Scema/RobotMatchInfos')
            .set('Accept', 'application/json')
            .end(function(err, res){
                let infos = JSON.parse(res.text);
            	this.setState({
                    scemaInfos: infos
                });
            }.bind(this));

        request
            .get('/Api/Matches/OptionList')
            .set('Accept', 'application/json')
            .end(function(err, res){
                let matches = JSON.parse(res.text);
            	this.setState({
                    matches: matches,
                    activeMatch: matches[0].match
                });
                console.log(matches[0].match);
            }.bind(this));
	},
	matchChange: function(val){
		this.state.matches.forEach(function(matchOption){
			if (matchOption.value == val){
				this.setState({
                    activeMatch: matchOption.match
                });
			}
		}.bind(this))
	},
	updateData: function(data, infoid){
		var scemaData = this.state.scemaData;
		scemaData[infoid] = data;
		this.setState({
			scemaData: scemaData
		});
	},
	save: function(){
		request
            .post('/Api/Scema/SaveRobotMatch')
            .send({match: this.state.activeMatch._id,scemaData:this.state.scemaData})
            .set('Accept', 'application/json')
            .end(function(err, res){
                let teams = JSON.parse(res.text);
            	this.setState({
                    teams: teams
                });
            }.bind(this));
		hashHistory.push('/Scouting/Matches')
	},
	render: function() {
		var select = "";
	    if (this.state.matches.length > 0){
	    	select = <Select name="form-field-name" value={this.state.activeMatch._id} options={this.state.matches} className="" onChange={this.matchChange} />;
	    }
	    if (this.state.scemaInfos.length > 0 && this.state.activeMatch._id){
			var infoRows = [];
			this.state.scemaInfos.forEach(function(info) {
	            infoRows.push(<ScemaMatchDataEntry match={this.state.activeMatch} key={info._id} scemaInfo={info} update={this.updateData}/>);
	        }.bind(this));
	    }
		return (
			<div className="content container">
			    <h2 className="page-title">Add Match <small></small></h2>
			    <div className="row">
					<div className="col-md-10">
						{select}
					</div>
					<div className="col-md-2">
						<div className="pull-right">
							<input type="button" className="btn btn-primary" onClick={this.save} value="Save" />
						</div> 
					</div>
				</div>
				<br/>
				{infoRows}
			</div>
		);
	  }
});

module.exports = AddMatch;