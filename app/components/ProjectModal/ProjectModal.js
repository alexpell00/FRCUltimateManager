/* 
* @Author: alexpelletier
* @Date:   2016-01-10 22:39:22
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-02-04 13:13:11
*/
import React from 'react';
import request from 'superagent';
import css from "./ProjectModal.css";

var ProjectModal = React.createClass({
  render: function() {
  	let url = (this.props.project.link != "") ? "<a target='_blank' href='" + this.props.project.link + "'>Website</a>" : "";
    return (
    	<div className="portfolio-modal modal fade" id="project-modal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-content">
                <div className="close-modal" data-dismiss="modal">
                    <div className="lr">
                        <div className="rl">
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2">
                            <div className="modal-body">
                                <h2>{this.props.project.title}</h2>
                                <hr className="star-primary" />
                                <p>{this.props.project.desc}</p>
                                <ul className="list-inline item-details">
                                    <li>Date:
                                        <strong>&nbsp;{this.props.project.dateRange}
                                        </strong>
                                    </li>
                                    <li>Tags: 
                                        <strong className="capitalize">
                                        	&nbsp;{this.props.project.tags.join(" ")}
                                        </strong>
                                    </li>
                                    <li>Technologies: 
                                        <strong className="capitalize">
                                        	&nbsp;{this.props.project.techs.join(", ")}
                                        </strong>
                                    </li> 
                                    <li>Website: 
                                        <strong><a href={this.props.project.link} target="_blank"> link</a>
                                        </strong>
                                    </li>                                   
                                </ul>
                                <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
});

module.exports = ProjectModal;