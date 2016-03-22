/*
* @Author: alexpelletier
* @Date:   2016-03-21 13:00:54
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-21 19:06:41
*/

import React from 'react';

var TeamMembersRow = React.createClass({
  render: function() {
    return (
		<tr>
	        <td>{this.props.user._id}</td>
	        <td><span className="fw-semi-bold">{this.props.user.fullname}</span></td>
	        <td className="">{this.props.user.username}</td>
	    </tr>
    );
  }
});

module.exports = TeamMembersRow;