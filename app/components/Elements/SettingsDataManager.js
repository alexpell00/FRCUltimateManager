/*
* @Author: alexpelletier
* @Date:   2016-03-22 00:41:26
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-22 17:35:06
*/


import React from 'react';
import request from 'superagent';
import Select from 'react-select';


var SettingsDataManager = React.createClass({
	getInitialState() {
		return {pRegionalStatus: 'Start...', pMatchesStatus: 'Start...',pTeamsStatus: 'Start...'};
	},
	pullRegionalsPressed() {
		if (this.state.pRegionalStatus == "Start..."){
			this.setState({
	            pRegionalStatus: 'Loading...'
	        });
			request
	            .get('/Api/Settings/PullRegionals')
	            .set('Accept', 'application/json')
	            .end(function(err, res){
	            	console.log(res);
	            	this.setState({
	                    pRegionalStatus: res.text,
	                    pMatchesStatus: 'Start...'
	                });
	            }.bind(this));
	    }
	}, 
	pullMatchPressed() {
		if (this.state.pMatchesStatus == "Start..."){
			this.setState({
	            pMatchesStatus: 'Loading...'
	        });
			request
	            .get('/Api/Settings/PullMatches')
	            .set('Accept', 'application/json')
	            .end(function(err, res){
	            	console.log(res);
	            	this.setState({
	                    pMatchesStatus: res.text
	                });
	            }.bind(this));
	    }
	},
	updateTeamsPressed() {
		if (this.state.pTeamsStatus == "Start..."){
			this.setState({
	            pTeamsStatus: 'Loading...'
	        });
			request
	            .get('/Api/Settings/UpdateTeams')
	            .set('Accept', 'application/json')
	            .end(function(err, res){
	            	console.log(res);
	            	this.setState({
	                    pTeamsStatus: res.text
	                });
	            }.bind(this));
	    }
	}, 
	render() {

		return (
			<div>
               <section className="widget">
                    <header>
                    </header>
                    <div className="body">
                        <form className="form-horizontal" role="form">
                            <fieldset>
                                <legend className="section">Data Manger</legend>
                                <div className="form-group">
                                    <label for="hint-field" className="col-sm-4 control-label">
                                        Pull Regionals
                                    </label>
                                    <div className="col-sm-7">
                                        <button onClick={this.pullRegionalsPressed} type="text" id="transparent-field" className="form-control input-transparent btn btn-primary" placeholder="">
                                        	{this.state.pRegionalStatus}
                                        </button>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="hint-field" className="col-sm-4 control-label">
                                        Pull Matches
                                    </label>
                                    <div className="col-sm-7">
	                                    <button onClick={this.pullMatchPressed} type="text" id="transparent-field" className="form-control input-transparent btn btn-primary" placeholder="">
	                                    	{this.state.pMatchesStatus}
	                                    </button>
	                                </div>
                                </div>
                                <div className="form-group">
                                    <label for="hint-field" className="col-sm-4 control-label">
                                        Update Teams
                                    </label>
                                    <div className="col-sm-7">
	                                    <button onClick={this.updateTeamsPressed} type="text" id="transparent-field" className="form-control input-transparent btn btn-primary" placeholder="">
	                                    	{this.state.pTeamsStatus}
	                                    </button>
	                                </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </section>
			</div>
		);
	}
});

module.exports = SettingsDataManager;
