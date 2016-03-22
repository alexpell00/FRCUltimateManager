/*
* @Author: alexpelletier
* @Date:   2016-03-21 13:04:50
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-21 20:36:51
*/

import React from 'react';
import request from 'superagent';

var AccountSettings = React.createClass({
	getInitialState() {
		return {name:"",email:""};
	},
	componentDidMount() {
		request
            .get('/Api/Self')
            .set('Accept', 'application/json')
            .end(function(err, res){
                let user = JSON.parse(res.text);
                this.setState({
                    name: user.fullname,
                    email: user.username
                });
            }.bind(this));
	},
	render: function() {
		return (
			<div className="content container">
			    <h2 className="page-title">Account Settings <small></small></h2>

			    <div className="row">
		            <div className="col-md-7">
					    <section className="widget">
		                    <header>
		                        <h4><i className="fa fa-user"></i> Account Profile <small></small></h4>
		                    </header>
		                    <div className="body">
		                        <form id="user-form" className="form-horizontal form-label-left"
		                              noValidate="novalidate"
		                              method="post"
		                              data-parsley-priority-enabled="false"
		                              data-parsley-excluded="input[name=gender]">
		                            <div className="row">
		                                <div className="col-sm-4">
		                                    <div className="text-align-center">
		                                        <img className="img-circle" src="img/15.jpg" alt="64x64" style={{height: "112px"}}/>
		                                    </div>
		                                </div>
		                                <div className="col-sm-8">
		                                    <h3 className="mt-sm mb-xs">{this.state.name}</h3>
		                                    <address>
		                                        <abbr title="Work email">e-mail:</abbr> <a href="mailto:#">{this.state.email}</a><br/>
		                                    </address>
		                                </div>
		                            </div>
		                            <fieldset>
		                                <legend className="section">Personal Info</legend>
		                                <div className="form-group">
		                                    <label className="control-label col-sm-4" htmlFor="prefix">Prefix</label>
		                                    <div className="col-sm-4"><input type="text" id="prefix" name="prefix" className="form-control input-transparent"/></div>
		                                </div>
		                                <div className="form-group">
		                                    <label className="control-label col-sm-4" htmlFor="first-name">First Name <span className="required">*</span></label>
		                                    <div className="col-sm-8"><input type="text" id="first-name" name="first-name" required="required" className="form-control input-transparent" /></div>
		                                </div>
		                                <div className="form-group">
		                                    <label className="control-label col-sm-4" htmlFor="last-name">Last Name <span className="required">*</span></label>
		                                    <div className="col-sm-8"><input type="text" id="last-name" name="last-name" required="required" className="form-control input-transparent" /></div>
		                                </div>
		                                <div className="form-group">
		                                    <label htmlFor="middle-name" className="control-label col-sm-4">Middle Name / Initial</label>
		                                    <div className="col-sm-8"><input id="middle-name" className="form-control input-transparent" type="text" name="middle-name" value=""/></div>
		                                </div>
		                                <div className="form-group">
		                                    <label className="control-label col-sm-4">Gender</label>
		                                    <div className="col-sm-8">
		                                        <div id="gender" className="btn-group" data-toggle="buttons">
		                                            <label className="btn btn-default" data-toggle-classname="btn-primary" data-toggle-passive-classname="btn-default">
		                                                <input type="radio" name="gender" value="male"/> &nbsp; Male &nbsp;
		                                            </label>
		                                            <label className="btn btn-primary active" data-toggle-classname="btn-primary" data-toggle-passive-classname="btn-default">
		                                                <input type="radio" name="gender" value="female"/> Female
		                                            </label>
		                                        </div>
		                                    </div>
		                                </div>
		                                <div className="form-group">
		                                    <label htmlFor="date-of-birth" className="control-label col-sm-4">Date Of Birth <span className="required">*</span></label>
		                                    <div className="col-sm-6"><input id="date-of-birth" className="date-picker form-control input-transparent" required="required" type="text" name="date-of-birth" value=""/></div>
		                                </div>
		                            </fieldset>
		                        </form>
		                    </div>
		                </section>
		            </div>
		        </div>

			</div>
		);
	}
});

module.exports = AccountSettings;