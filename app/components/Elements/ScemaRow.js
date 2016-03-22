/*
* @Author: alexpelletier
* @Date:   2016-03-21 11:53:58
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-21 12:01:33
*/

import React from 'react';

import Select from 'react-select';

var ScemaRow = React.createClass({
	logChange: function(val) {
	    console.log("Selected: " + val);
	}, 
	render() {
		var options = [
		    { value: 'one', label: 'One' },
		    { value: 'two', label: 'Two' }
		];
		return (
			<div>
                <li className="list-group-item" style={{marginTop: '10px'}}>
                    <div className="row">
                    	<div className="col-sm-1">
                    		<i className="fa fa-sort"></i>
                    	</div>
                    	<div className="col-sm-3">
                    		<form>
                    			<input
						          type="text" placeholder="Name" value="" ref="nameTextInput" className="form-control" /* onChange={this.handleChange} */
						        />
                    		</form>
                    	</div>
                    	<div className="col-sm-2">
                    		<form>
                    			<Select
								    name="form-field-name" value="" options={options} className="form-control" onChange={this.logChange}
								/>
                    		</form>
                    	</div>
                    	<div className="col-sm-2">
                    		<form>
                    			<Select
								    name="form-field-name" value="" options={options} className="form-control" onChange={this.logChange}
								/>
                    		</form>
                    	</div>
                    	<div className="col-sm-3">
                    		<form>
                    			<input
						          type="text" placeholder="Blue Alliance Api Data Path" value="" ref="apiTextInput" className="form-control" /* onChange={this.handleChange} */
						        />
                    		</form>
                    	</div>
                    	<div className="col-sm-1">
                    		<a className="close" data-dismiss="alert" href="#" aria-hidden="true">&times;</a>
                    	</div>
                    </div>	
                </li>
			</div>
		);
	}
});

module.exports = ScemaRow;
