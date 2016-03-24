/*
* @Author: alexpelletier
* @Date:   2016-03-23 22:41:29
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-23 23:09:26
*/

import React from 'react';
import request from 'superagent';

import MatchesRow from '../Elements/MatchesRow'

var MatchesTable = React.createClass({
	getInitialState() {
		return {matches:{}};
	},
	componentDidMount() {
		console.log(this.props);
		request
            .post('/Api/Matches/ForTeam')
            .send({teamid: this.props.teamid})
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
		);
	}
});

module.exports = MatchesTable;