/*
* @Author: alexpelletier
* @Date:   2016-03-20 16:26:36
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-21 12:46:51
*/

import React from 'react';

import MatchesRow from '../Elements/MatchesRow'

var Matches = React.createClass({
  render: function() {
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
		                        <MatchesRow/>
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