/*
* @Author: alexpelletier
* @Date:   2016-03-21 16:04:11
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-21 19:43:48
*/

import React from 'react';
import { Link, hashHistory } from 'react-router';
import request from 'superagent';

var AddTeamMemberModal = React.createClass({
	componentDidMount() {
		$('#addTeamMemberModal').modal('show');
	},
	componentWillUnmount() {
		$('#addTeamMemberModal').modal('hide');
	},
	addClicked() {
		request
            .post('/Api/Managment/TeamMembers/Add')
            .send({username: this.refs.emailInput.value,password: 'password', name: this.refs.nameInput.value})
            .set('Accept', 'application/json')
            .end(function(err, res){
                let user = JSON.parse(res.text);
                if (user.username){
	                this.props.onAddUser(user);
	                hashHistory.push('/Managment/TeamMembers')
	            }
            }.bind(this));
	},
	render() {
		return (
			<div id="addTeamMemberModal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: "none"}}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 className="modal-title" id="myModalLabel">Add Team Member</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal" role="form">
	                            <fieldset>
	                                <div className="form-group">
	                                    <label for="hint-field" className="col-sm-4 control-label">
	                                        Email
	                                    </label>
	                                    <div className="col-sm-7">
	                                        <input type="text" ref="emailInput" id="transparent-field" className="form-control input-transparent" placeholder=""/>
	                                    </div>
	                                </div>
	                            </fieldset>
	                            <fieldset>
	                                <div className="form-group">
	                                    <label for="hint-field" className="col-sm-4 control-label">
	                                        Name
	                                    </label>
	                                    <div className="col-sm-7">
	                                        <input type="text" ref="nameInput" id="transparent-field" className="form-control input-transparent" placeholder=""/>
	                                    </div>
	                                </div>
	                            </fieldset>
	                            <div className="form-actions">
	                                <div className="row">
	                                    <div className="col-sm-offset-5 col-sm-6">
	                                        <div className="btn-toolbar">
	                                        	<input type="button" className="btn btn-primary" value="Add" onClick={this.addClicked}/>
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>
	                        </form>
                        </div>
                        <div className="modal-footer">
                            <Link to='/Managment/TeamMembers/'>
	                            <button type="button" className="btn btn-default">Close</button>
	                        </Link>
                        </div>

                    </div>
                </div>

                

            </div>
		);
	}
});

module.exports = AddTeamMemberModal;

