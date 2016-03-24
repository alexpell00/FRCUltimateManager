/*
* @Author: alexpelletier
* @Date:   2016-03-20 16:25:19
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-24 03:32:50
*/

import React from 'react';
import request from 'superagent';
import Select from 'react-select';
import { Link, hashHistory } from 'react-router';

import ScemaDataEntryRow from '../Elements/ScemaDataEntry/ScemaDataEntryRow'

var AddPitScout = React.createClass({
	getInitialState() {
		return {scemaInfos:{},scemaData: {},teams:{},currentTeamId:''};
	},
	componentDidMount() {
		request
            .get('/Api/Scema/PitInfos')
            .set('Accept', 'application/json')
            .end(function(err, res){
                let infos = JSON.parse(res.text);
            	this.setState({
                    scemaInfos: infos
                });
            }.bind(this));

        request
            .get('/Api/Teams/OptionList')
            .set('Accept', 'application/json')
            .end(function(err, res){
                let teams = JSON.parse(res.text);
            	this.setState({
                    teams: teams
                });
            }.bind(this));
	},
	teamChange: function(val){
		this.setState({
			currentTeamId: val
		});
	},
	save: function(){
		request
            .post('/Api/Scema/SavePitScout')
            .send({teamnumber: this.state.currentTeamId,scemaData:this.state.scemaData})
            .set('Accept', 'application/json')
            .end(function(err, res){
                let teams = JSON.parse(res.text);
            	this.setState({
                    teams: teams
                });
            }.bind(this));
		hashHistory.push('/Scouting/Teams')
	},
	updateData: function(data, infoid){
		var scemaData = this.state.scemaData;
		scemaData[infoid] = data;
		this.setState({
			scemaData: scemaData
		});
	},
	render: function() {
		if (this.state.scemaInfos.length > 0){
			var infoRows = this.state.scemaInfos.map(function(info) {
	            return <ScemaDataEntryRow key={info._id} scemaInfo={info} update={this.updateData}/>;
	        }.bind(this));
	    }
	    var select = "";
	    if (this.state.teams.length > 0){
	    	select = <Select name="form-field-name" value={this.state.currentTeamId} ref="infoTypeInput" options={this.state.teams} className="" onChange={this.teamChange} />;
	    }
		return (
			<div className="content container">
			    <h2 className="page-title">Add Pit Scout <small></small></h2>
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
			    
			    {infoRows}
			</div>
		);
	}
});

module.exports = AddPitScout;