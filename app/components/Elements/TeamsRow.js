/*
* @Author: alexpelletier
* @Date:   2016-03-21 12:16:46
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-21 12:22:31
*/
import React from 'react';


var TeamsRow = React.createClass({
  render: function() {
    return (
		<tr>
		    <td>1</td>
		    <td><span className="fw-semi-bold">2972</span></td>
		    <td>RD Dawson</td>
		    <td>Boulder, CO, USA</td>
		    <td>CO</td>
		    <td>Denver, Las Vegas</td>
		</tr>
	);
  }
});

module.exports = TeamsRow;