/*
* @Author: alexpelletier
* @Date:   2016-03-20 16:27:28
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-21 19:19:10
*/

import React from 'react';
import request from 'superagent';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

import TeamMembersRow from '../Elements/TeamMembersRow'

var TeamMembers = React.createClass({
	getInitialState() {
		return {users: []};
	},
	componentDidMount() {
		request
            .get('/Api/Managment/TeamMembers')
            .set('Accept', 'application/json')
            .end(function(err, res){
                let users = JSON.parse(res.text);
                console.log(users);
                this.setState({
                    users: users
                });
            }.bind(this));
	},
	handleUserAdded(user) {
		console.log(user);
		this.setState({
			users: this.state.users.concat(user)
		});
	},
  render: function() {
  	var userRows = this.state.users.map(function(user) {
            return <TeamMembersRow key={user._id} user={user}/>;
        });

    return (
		<div className="content container">
		    <h2 className="page-title">Team Member <small></small></h2>

		    

			<section className="widget">
				<div className="pull-right">
					<Link to='/Managment/TeamMembers/Add'>
						<input type="button" className="btn btn-primary" /* onClick={this.props.onSomeEvent} */ value="+" />
					</Link>
				</div>    

	            <header>
	                <h4> <span className="fw-semi-bold"></span></h4>
	            </header>
	            <div className="body">
	                <div className="mt">
	                    <table id="datatable-table" className="table table-striped table-hover sortable">
	                        <thead>
		                        <tr>
		                            <th>Id</th>
		                            <th>Name</th>
		                            <th>Email</th>
		                        </tr>
	                        </thead>
	                        <tbody>
		                        {userRows}
	                        </tbody>
	                    </table>
	                </div>
	            </div>
	        </section>

	        {this.props.children && React.cloneElement(this.props.children, {
	            onAddUser: this.handleUserAdded
	          })}
	    </div>
    );
  }
});

module.exports = TeamMembers;