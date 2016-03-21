/*
* @Author: alexpelletier
* @Date:   2016-03-20 16:27:04
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-21 11:23:24
*/

import React from 'react';

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
				</div>

				<div className="row">
		            <div className="col-md-10">
		                <h4>Closest stars</h4>
		                <ol className="list-group list-group-outer sortable list-group-sortable">
		                    <li className="list-group-item">
		                        <i className="fa fa-bars"></i>
		                        <a className="close" data-dismiss="alert" href="#" aria-hidden="true">&times;</a>
		                        &nbsp;&nbsp;&nbsp; 03 &nbsp;&nbsp;&nbsp;
		                        Barnard's Star
		                    </li>
		                </ol>
		                <br/>
		            </div>
		        </div>
		    </div>
		);
	}
});

module.exports = Scema;
