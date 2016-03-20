/* 
* @Author: alexpelletier
* @Date:   2016-01-10 22:39:22
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-02-04 11:01:04
*/
import React from 'react';
import request from 'superagent';
import css from "./ProjectTile.css";

var ProjectTile = React.createClass({
	handleClick: function(){
		this.props.handleClick(this.props.project);
	},
	render: function() {
		var image = "cabin.png";
		if (this.props.project.images.length > 0){
			image = this.props.project.images[0];
		}
		let tags = this.props.project.tags.join(" ");
		return (
			<div className={"col-sm-4 portfolio-item mix " + tags} onClick={this.handleClick}>
			    <a href={"#project-modal-" + this.props.project._id} className="portfolio-link" data-toggle="modal">
			        <div className="caption">
			            <div className="caption-content">
			                <i className="fa fa-search-plus fa-3x"></i>
			                <br></br>
			                {this.props.project.title}
			            </div>
			        </div>
			        <img src={'img/portfolio/' + image} className="img-responsive" alt=""/>
			    </a>
			</div>
		);
	}
});

module.exports = ProjectTile;