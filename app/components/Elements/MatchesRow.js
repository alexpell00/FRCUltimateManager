/*
* @Author: alexpelletier
* @Date:   2016-03-21 12:12:04
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-21 12:50:43
*/

import React from 'react';

var MatchesRow = React.createClass({
  render: function() {
    return (
		<tr>
            <td>1</td>
            <td>69</td>
            <td><span className="fw-semi-bold">2016casd_f1m1</span></td>
            <td>f</td>
            <td>2016casd</td>
            <td>12:12am</td>
            <td>2972, 2972, 2972, 2972, 2972, 2972</td>
        </tr>
    );
  }
});

module.exports = MatchesRow;