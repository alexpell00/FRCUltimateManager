/*
* @Author: alexpelletier
* @Date:   2016-03-20 16:26:36
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-23 11:29:25
*/

import React from 'react';
import request from 'superagent';

import MatchesRow from '../Elements/MatchesRow'

var Matches = React.createClass({
	getInitialState() {
		return {matches:{}};
	},
	componentDidMount() {
		request
            .get('/Api/Matches/List')
            .set('Accept', 'application/json')
            .end(function(err, res){
                let matches = JSON.parse(res.text);
            	this.setState({
                    matches: matches
                });
            }.bind(this));
	},
	render: function() {
		if (this.state.matches.length > 0){
			var rows = this.state.matches.map(function(match) {
	            return <MatchesRow key={match._id} match={match}/>;
	        });
	    }
		return (
			<div className="content container">
			    <h2 className="page-title">Matches <small></small></h2>

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
			                            <th>Match #</th>
			                            <th>Key</th>
			                            <th>Comp Lvl</th>
			                            <th>Event Key</th>
			                            <th>Time</th>
			                            <th>Teams</th>
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

module.exports = Matches;