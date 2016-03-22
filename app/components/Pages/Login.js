/*
* @Author: alexpelletier
* @Date:   2016-03-21 19:18:59
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-21 19:58:32
*/

import React from 'react';
import request from 'superagent';
import { Link, hashHistory } from 'react-router';

var Login = React.createClass({
	handleLogin: function(){
		request
            .post('/Api/Login')
            .send({username: this.refs.emailInput.value,password: this.refs.passwordInput.value})
            .set('Accept', 'application/json')
            .end(function(err, res){
                let jsonRes = JSON.parse(res.text);
                if (jsonRes.status == "logged in"){
                	hashHistory.push('/')
                }
            }.bind(this));
	},
	render: function() {
		return (
			<div className="single-widget-container">
		        <section className="widget login-widget">
		            <header className="text-align-center">
		                <h4>Login to your account</h4>
		            </header>
		            <div className="body">
		                <form className="no-margin">
		                    <fieldset>
		                        <div className="form-group">
		                            <label for="email" >Email</label>
		                            <div className="input-group">
		                                <span className="input-group-addon">
		                                    <i className="fa fa-user"></i>
		                                </span>
		                                <input ref='emailInput' id="email" type="email" className="form-control input-lg input-transparent"
		                                       placeholder="Your Email"/>
		                            </div>
		                        </div>
		                        <div className="form-group">
		                            <label for="password" >Password</label>

		                            <div className="input-group input-group-lg">
		                                <span className="input-group-addon">
		                                    <i className="fa fa-lock"></i>
		                                </span>
		                                <input ref='passwordInput' id="password" type="password" className="form-control input-lg input-transparent"
		                                       placeholder="Your Password"/>
		                            </div>
		                        </div>
		                    </fieldset>
		                    <div className="form-actions">
		                        <button onClick={this.handleLogin} className="btn btn-block btn-lg btn-danger ">
		                            <small>Sign In</small>
		                        </button>
		                        <a className="forgot" href="#">Forgot Username or Password?</a>
		                    </div>
		                </form>
		            </div>
		        </section>
		    </div>
		);
	}
});

module.exports = Login;