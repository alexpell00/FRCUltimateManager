/* 
* @Author: alexpelletier
* @Date:   2016-01-10 22:39:22
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-02-04 11:13:53
*/
import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import css from "./ProjectsGrid.css";
import ProjectTile from "../ProjectTile"
import ProjectModal from "../ProjectModal"

var ProjectsGrid = React.createClass({
  getInitialState: function() {
    return {selectedProject: {}};
  },
  handleTileClicked: function(project){
    this.setState({
        selectedProject: project
    });
    $("#project-modal").modal("show");
  },
  componentDidUpdate: function(){
    ReactDOM.render(<ProjectModal project={this.state.selectedProject} />, document.getElementById('project-modal-container'));
  },
  render: function() {
  	var rows = [];
  	if (typeof this.props.projects.length !== 'undefined'){
	    this.props.projects.forEach(function(project) {
	      rows.push(<ProjectTile project={project} key={project._id} handleClick={this.handleTileClicked}/>);
	    }.bind(this));
	}
    return (
      <div>
        <div className="row portfolio-container mix">
          {rows}
        </div> 
      </div>
    );

    
  }
});

module.exports = ProjectsGrid;