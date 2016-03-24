/*
* @Author: alexpelletier
* @Date:   2016-03-23 22:17:30
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-24 05:44:31
*/

import React from 'react';
import request from 'superagent';

import MatchesTable from '../Elements/MatchesTable'
import PitStats from '../Elements/PitStats'
import RobotStats from '../Elements/RobotStats'

var Team = React.createClass({
	getInitialState() {
		return {team:{}};
	},
	componentDidMount() {
		request
            .post('/Api/Teams/GetSingle')
            .send({'teamid':this.props.params.teamid})
            .set('Accept', 'application/json')
            .end(function(err, res){
                let team = JSON.parse(res.text);
            	this.setState({
                    team: team
                });
            }.bind(this));
	},
	render: function() {
		return (
			<div className="content container">
			    <h2 className="page-title">Team <small></small></h2>

			    <section className="widget">
			    	<div className="row">
	                    <div className="body col-sm-7">
	                        <div className="row">
	                            <div className="col-sm-4">
	                                <div className="text-align-center">
	                                    <img className="img-circle" src="img/15.jpg" alt="64x64" style={{height: "112px"}}/>
	                                </div>
	                            </div>
	                            <div className="col-sm-8">
	                                <h3 className="mt-sm mb-xs">{this.state.team.name}</h3>
	                                <address>
	                                    <abbr title="">#</abbr>{this.state.team.number}<br/>
	                                    <abbr title="">Location: </abbr>{this.state.team.location}<br/>
	                                    <abbr title="">Website: </abbr><a href={this.state.team.website} target='_blank'>{this.state.team.website}</a><br/>
	                                </address>
	                            </div>
	                        </div>
	                    </div>
	                </div>
                </section>

                <section className="widget widget-tabs">
                    <header>
                        <ul className="nav nav-tabs">
                            <li className="active">
                                <a href="#matches" data-toggle="tab">Matches</a>
                            </li>
                            <li>
                                <a href="#matchstats" data-toggle="tab">Match Stats</a>
                            </li>
                            <li>
                                <a href="#robotstats" data-toggle="tab">Robot Stats</a>
                            </li>
                            <li>
                                <a href="#pitstats" data-toggle="tab">Pit Stats</a>
                            </li>
                        </ul>
                    </header>
                    <div className="body tab-content">
                        <div id="matches" className="tab-pane active clearfix">
                            <MatchesTable teamid={this.props.params.teamid}/>
                        </div>
                        <div id="matchstats" className="tab-pane">
                        </div>
                        <div id="robotstats" className="tab-pane">
                            <RobotStats teamid={this.props.params.teamid}/>
                        </div>
                        <div id="pitstats" className="tab-pane">
                            <PitStats teamid={this.props.params.teamid}/>
                        </div>
                    </div>
                </section>

			</div>
		);
	}
});

module.exports = Team;