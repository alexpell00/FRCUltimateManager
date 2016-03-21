/*
* @Author: alexpelletier
* @Date:   2016-03-20 16:27:28
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-21 11:04:39
*/

import React from 'react';

var TeamMembers = React.createClass({
  render: function() {
    return (
    	<div>
			<div className="content container">
			    <h2 className="page-title">Team Member <small></small></h2>
			</div>

			<section className="widget">    
	            <header>
	                <h4>Table <span className="fw-semi-bold">Styles</span></h4>
	                <div className="widget-controls">
	                    <a data-widgster="expand" title="Expand" href="#"><i className="glyphicon glyphicon-chevron-up"></i></a>
	                    <a data-widgster="collapse" title="Collapse" href="#"><i className="glyphicon glyphicon-chevron-down"></i></a>
	                    <a data-widgster="close" title="Close" href="#"><i className="glyphicon glyphicon-remove"></i></a>
	                </div>
	            </header>
	            <div className="body">
	                <p>
	                    Column sorting, live search, pagination. Built with
	                    <a href="http://www.datatables.net/" target="_blank">jQuery DataTables</a>
	                </p>
	                <div className="mt">
	                    <table id="datatable-table" className="table table-striped table-hover sortable">
	                        <thead>
		                        <tr>
		                            <th>Id</th>
		                            <th>Name</th>
		                            <th className="">Email</th>
		                        </tr>
	                        </thead>
	                        <tbody>
		                        <tr>
		                            <td>1</td>
		                            <td><span className="fw-semi-bold">Alex Pelletier</span></td>
		                            <td className="">apelletier@dawsonstudents.org</td>
		                        </tr>
	                        </tbody>
	                    </table>
	                </div>
	            </div>
	        </section>
	    </div>
    );
  }
});

module.exports = TeamMembers;