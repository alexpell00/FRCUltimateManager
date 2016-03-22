/*
* @Author: alexpelletier
* @Date:   2016-03-21 12:47:15
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-21 12:51:43
*/

import React from 'react';

var HoursRow = React.createClass({
  render: function() {
    return (
		<tr>
            <td>1</td>
            <td>Alex Pelletier</td>
            <td><span className="fw-semi-bold">269</span></td>
        </tr>
    );
  }
});

module.exports = HoursRow;