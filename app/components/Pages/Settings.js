/*
* @Author: alexpelletier
* @Date:   2016-03-20 16:27:49
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-21 16:50:51
*/

import React from 'react';

var Settings = React.createClass({
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
	                                        <input type="text" id="transparent-field" className="form-control input-transparent" placeholder=""/>
	                                    </div>
	                                </div>
	                                <div className="form-group">
	                                    <label for="hint-field" className="col-sm-4 control-label">
	                                        Year
	                                    </label>
	                                    <div className="col-sm-7">
	                                        <input type="text" id="transparent-field" className="form-control input-transparent" placeholder=""/>
	                                    </div>
	                                </div>
	                                <div className="form-group">
	                                    <label for="hint-field" className="col-sm-4 control-label">
	                                        Active Scema
	                                    </label>
	                                    <div className="col-sm-7">
	                                        <input type="text" id="transparent-field" className="form-control input-transparent" placeholder=""/>
	                                    </div>
	                                </div>
	                            </fieldset>
	                            <div className="form-actions">
	                                <div className="row">
	                                    <div className="col-sm-offset-4 col-sm-7">
	                                        <div className="btn-toolbar">
	                                            <button type="submit" className="btn btn-primary">Save Changes</button>
	                                            <button type="button" className="btn btn-inverse">Cancel</button>
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>
	                        </form>
	                    </div>
	                </section>
	            </div>
           	</div>
		</div>
    );
  }
});

module.exports = Settings;