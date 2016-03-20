/* 
* @Author: alexpelletier
* @Date:   2016-01-10 22:39:22
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-01-25 23:53:59
*/
import React from 'react';
import request from 'superagent';
import css from "./ProjectSearchBar.css";

var ProjectSearchBar = React.createClass({
  render: function() {
    return (
		<div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4 text-center">
                <button id='star-btn' className='btn btn-primary filter active' data-filter=".star"><i className="fa fa-star"></i></button>
                <button className='btn btn-primary filter' data-filter="all">All</button>
                <button className='btn btn-primary filter' data-filter=".web">Web</button>
                <button className='btn btn-primary filter' data-filter=".ios">IOS</button>
                <button className='btn btn-primary filter' data-filter=".entrepreneur">Entrepreneur</button>
            </div>
            <div className="col-sm-4"></div>
        </div>
    );
  }
});

module.exports = ProjectSearchBar;