/*
* @Author: alexpelletier
* @Date:   2016-03-20 16:27:04
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-22 00:44:55
*/

import React from 'react';
import request from 'superagent';
import ScemaRow from '../Elements/ScemaRow'

var Scema = React.createClass({
	getInitialState() {
		return {activeScema:{},scemaInfos:{},scemaValueTypes:{},scemaInfoTypes:{}};
	},
	componentDidMount: function(){
		setTimeout(function(){
			$(".sortable").sortable({
	            placeholder: 'list-group-item list-group-item-placeholder',
	            forcePlaceholderSize: true
	        });
		},100)

		request
            .get('/Api/Scema/Scemas')
            .set('Accept', 'application/json')
            .end(function(err, res){
                let scemas = JSON.parse(res.text);
                if (scemas.length > 0){
                	this.setState({
	                    activeScema: scemas[0]
	                });
	                this.getScemaRows();
                }
            }.bind(this));

        request
            .get('/Api/Scema/ScemaValueTypes')
            .set('Accept', 'application/json')
            .end(function(err, res){
                let valueTypes = JSON.parse(res.text);
            	this.setState({
                    scemaValueTypes: valueTypes
                });
            }.bind(this));

        request
            .get('/Api/Scema/ScemaInfoTypes')
            .set('Accept', 'application/json')
            .end(function(err, res){
                let infoTypes = JSON.parse(res.text);
            	this.setState({
                    scemaInfoTypes: infoTypes
                });
            }.bind(this));
	},
	addScemaRow: function(){
		if (this.state.activeScema._id != "" && this.state.activeScema._id){
			request
	            .post('/Api/Scema/AddRow')
	            .send({scema_id: this.state.activeScema._id})
	            .set('Accept', 'application/json')
	            .end(function(err, res){
	            	let scemaInfo = JSON.parse(res.text);
	                this.setState({
						scemaInfos: this.state.scemaInfos.concat(scemaInfo)
					});
	            }.bind(this));
	    }
	},
	getScemaRows: function(){
		request
            .post('/Api/Scema/ScemaInfos')
            .send({scema_id: this.state.activeScema._id})
            .set('Accept', 'application/json')
            .end(function(err, res){
            	let scemaInfos = JSON.parse(res.text);
            	console.log(scemaInfos[0]);
                this.setState({
                	scemaInfos: scemaInfos
                });
            }.bind(this));
	},
	saveScemaRow: function(scemaInfo){
		request
            .post('/Api/Scema/SaveScemaInfo')
            .send(scemaInfo)
            .set('Accept', 'application/json')
            .end(function(err, res){
            	let scemaInfos = JSON.parse(res.text);
            	console.log(scemaInfos);
                this.setState({
                	scemaInfos: scemaInfos
                });
            }.bind(this));	
	},
	deleteScemaRow: function(scemaInfo){
		request
            .post('/Api/Scema/DeleteScemaInfo')
            .send(scemaInfo)
            .set('Accept', 'application/json')
            .end(function(err, res){
            	let scemaInfos = JSON.parse(res.text);
            	console.log(scemaInfos);
                this.setState({
                	scemaInfos: scemaInfos
                });
            }.bind(this));	
	},
	render: function() {	
		if (this.state.scemaInfos.length > 0){
			var scemaInfoRows = this.state.scemaInfos.map(function(scemaInfo) {
	            return <ScemaRow delete={this.deleteScemaRow} key={scemaInfo._id} save={this.saveScemaRow} scemaInfo={scemaInfo} valueTypes={this.state.scemaValueTypes} infoTypes={this.state.scemaInfoTypes}/>;
	        }.bind(this));
	    }

		return (
			<div>
				<div className="content container">
				    <h2 className="page-title">Schema <small></small></h2>

					<div className="row">
			            <div className="col-md-12">
							<div className="pull-right">
								<input type="button" className="btn btn-primary" onClick={this.addScemaRow} value="Add Row" />
							</div>
							
			                <h4>Active Scema: {this.state.activeScema.name} ({this.state.activeScema.year})</h4>
			                <ol className="list-group list-group-outer sortable list-group-sortable" style={{width:'100%'}}>
				                {scemaInfoRows}
				            </ol>
			                
			            </div>
			        </div>
			    </div>
		    </div>
		);
	}
});

module.exports = Scema;
