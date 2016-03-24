/*
* @Author: alexpelletier
* @Date:   2016-03-20 16:26:12
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-23 11:29:21
*/

import React from 'react';
import request from 'superagent';

import TeamsRow from '../Elements/TeamsRow'

var Teams = React.createClass({
	getInitialState() {
		return {teams:{}};
	},
	componentDidMount() {
		request
            .get('/Api/Teams/List')
            .set('Accept', 'application/json')
            .end(function(err, res){
                let teams = JSON.parse(res.text);
            	this.setState({
                    teams: teams
                });
            }.bind(this));
	},
	render: function() {
		if (this.state.teams.length > 0){
			var rows = this.state.teams.map(function(team) {
	            return <TeamsRow key={team._id} team={team}/>;
	        });
	    }
		return (
			<div className="content container">
			    <h2 className="page-title">Teams <small></small></h2>

			    <section className="widget">    
			        <header>
			            <h4> <span className="fw-semi-bold"></span></h4>
			        </header>
			        <div className="body">
			            <div className="mt">
			                <table id="datatable-table" className="table table-striped table-hover sortable">
			                    <thead>
			                        <tr>
			                            <th>Id</th>
			                            <th>Team #</th>
			                            <th>Name</th>
			                            <th>location</th>
			                            <th>region</th>
			                            <th>regionals</th>
			                        </tr>
			                    </thead>
			                    <tbody>
			                        {rows}
			                    </tbody>
			                </table>
			            </div>
			        </div>
			    </section>
			</div>
		);
	}
});

module.exports = Teams;