/*
* @Author: alexpelletier
* @Date:   2016-03-20 16:27:04
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-21 13:00:14
*/

import React from 'react';

import ScemaRow from '../Elements/ScemaRow'

var Scema = React.createClass({
	componentDidMount: function(){
		setTimeout(function(){
			$(".sortable").sortable({
	            placeholder: 'list-group-item list-group-item-placeholder',
	            forcePlaceholderSize: true
	        });
		},100)
	},
	render: function() {	
		return (
			<div>
				<div className="content container">
				    <h2 className="page-title">Scema <small></small></h2>

					<div className="row">
			            <div className="col-md-12">
							<div className="pull-right">
								<input type="button" className="btn btn-primary" /* onClick={this.props.onSomeEvent} */ value="Add Row" />
							</div>
							
			                <h4>Closest stars</h4>
			                <ol className="list-group list-group-outer sortable list-group-sortable" style={{width:'100%'}}>
				                <ScemaRow/>
				                <ScemaRow/>
				                <ScemaRow/>
				                <ScemaRow/>
				            </ol>
			                
			            </div>
			        </div>
			    </div>
		    </div>
		);
	}
});

module.exports = Scema;
