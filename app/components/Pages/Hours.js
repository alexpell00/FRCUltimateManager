/*
* @Author: alexpelletier
* @Date:   2016-03-20 16:23:40
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-21 12:58:43
*/

import React from 'react';

import HoursRow from '../Elements/HoursRow'

var Hours = React.createClass({
  render: function() {
    return (
		<div className="content container">
		    <h2 className="page-title">Hours <small></small></h2>

		    <div className="row">
		    	<div className="col-md-7">
		    		<section className="widget">    
			            <header>
			                <h4> <span className="fw-semi-bold"></span></h4>
			            </header>
			            <div className="body">
			                <div className="mt">
			                    <table id="datatable-table" className="table table-striped table-hover sortable">
			                        <thead>
				                        <tr>
				                            <th>Rank</th>
				                            <th>Name</th>
				                            <th>Hours</th>
				                        </tr>
			                        </thead>
			                        <tbody>
			                        	<HoursRow/>
			                        	<HoursRow/>
			                        	<HoursRow/>
			                        </tbody>
			                    </table>
			                </div>
			            </div>
			        </section>
		    	</div>
		    	<div className="col-md-5">
		    		<section className="widget">    
			            <header>
			                <h4> Log <span className="fw-semi-bold">Your</span> Hours</h4>
			            </header>
			            <div className="body">
			                <div className="row">
			                	<div className="col-md-6">
			                		<input style={{width:'100%'}} type="button" className="btn btn-success" value="Start Timer"/>
			                	</div>
			                	<div className="col-md-6">
			                		<input style={{width:'100%'}} type="button" className="btn btn-danger" value="Stop Timer"/>
			                	</div>
			                </div>
			            </div>
			        </section>
		    	</div>
		    </div>
		</div>
    );
  }
});

module.exports = Hours;