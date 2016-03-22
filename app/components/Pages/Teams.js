/*
* @Author: alexpelletier
* @Date:   2016-03-20 16:26:12
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-21 12:23:16
*/

import React from 'react';

import TeamsRow from '../Elements/TeamsRow'

var Teams = React.createClass({
  render: function() {
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
		                        <TeamsRow/>
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