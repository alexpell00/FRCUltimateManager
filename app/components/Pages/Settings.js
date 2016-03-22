/*
* @Author: alexpelletier
* @Date:   2016-03-20 16:27:49
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-22 10:56:17
*/

import React from 'react';
import request from 'superagent';

import SettingsDataManager from '../Elements/SettingsDataManager'

var Settings = React.createClass({
	getInitialState() {
		return {settings: {}};
	},
	componentDidMount() {
		request
            .get('/Api/Settings/GetSettings')
            .set('Accept', 'application/json')
            .end(function(err, res){
                let settings = JSON.parse(res.text);
            	this.setState({
                    settings: settings
                });
            }.bind(this));
	},
	handleTextChange(){
		this.setState({
            settings: {
            	team: this.refs.teamInput.value,
            	year: this.refs.yearInput.value,
            	activeSchema: this.refs.activeSchemaInput.value
            }
        });
	},
	saveData(){
		request
            .post('/Api/Settings/SaveSettings')
            .send(this.state.settings)
            .set('Accept', 'application/json')
            .end(function(err, res){
            }.bind(this));
	},
	render: function() {
		return (
			<div className="content container">
			    <h2 className="page-title">Settings <small></small></h2>

			    <div className="row">
		            <div className="col-md-6">
		                <section className="widget">
		                    <header>
		                    </header>
		                    <div className="body">
		                        <form className="form-horizontal" role="form">
		                            <fieldset>
		                                <legend className="section">Application Settings</legend>
		                                <div className="form-group">
		                                    <label for="hint-field" className="col-sm-4 control-label">
		                                        Team
		                                    </label>
		                                    <div className="col-sm-7">
		                                        <input onChange={this.handleTextChange} ref='teamInput' value={this.state.settings.team} type="text" id="transparent-field" className="form-control input-transparent" placeholder=""/>
		                                    </div>
		                                </div>
		                                <div className="form-group">
		                                    <label for="hint-field" className="col-sm-4 control-label">
		                                        Year
		                                    </label>
		                                    <div className="col-sm-7">
		                                        <input onChange={this.handleTextChange} ref='yearInput' value={this.state.settings.year} type="text" id="transparent-field" className="form-control input-transparent" placeholder=""/>
		                                    </div>
		                                </div>
		                                <div className="form-group">
		                                    <label for="hint-field" className="col-sm-4 control-label">
		                                        Active Scema
		                                    </label>
		                                    <div className="col-sm-7">
		                                        <input onChange={this.handleTextChange} ref='activeSchemaInput'  type="text" value={this.state.settings.activeSchema} id="transparent-field" className="form-control input-transparent" placeholder=""/>
		                                    </div>
		                                </div>
		                            </fieldset>
		                            <div className="form-actions">
		                                <div className="row">
		                                    <div className="col-sm-offset-4 col-sm-7">
		                                        <div className="btn-toolbar">
		                                            <button onClick={this.saveData} className="btn btn-primary">Save Changes</button>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                        </form>
		                    </div>
		                </section>


		            </div>
		            <div className="col-md-6">
		            	<SettingsDataManager/>
		            </div>
		       	</div>
			</div>
		);
	}
});

module.exports = Settings;