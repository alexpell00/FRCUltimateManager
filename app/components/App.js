/*
* @Author: alexpelletier
* @Date:   2016-03-20 14:48:07
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-20 16:53:55
*/

import React from 'react';

import Sidebar from './Sidebar'
import Header from './Header'

var App = React.createClass({
  render: function() {
    return (
      <div className="background-dark">
      	<div className="logo">
            <h4>
                <a href="index.html">
                    FRC<strong>Ultimate</strong>Manager
                </a>
            </h4>
        </div>

        <Sidebar/>

        <div className="wrap">
	        <Header/>
	        {this.props.children}
	    </div>

      </div>
    );
  }
});

module.exports = App;