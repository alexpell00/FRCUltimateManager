/* 
* @Author: alexpelletier
* @Date:   2016-01-10 22:39:22
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-02-04 15:11:20
*/
import React from 'react';
import request from 'superagent';
import css from "./FilterableProjects.css";
import ProjectSearchBar from '../ProjectSearchBar'
import ProjectsGrid from '../ProjectsGrid'

var FilterableProjects = React.createClass({
    componentDidUpdate: function(){
        console.log("mxing"); //not firing, but WHY!!
        $('.portfolio-container').mixItUp({
            load: {
                filter: '.star'
            }
        });
    },
    getInitialState: function() {
        return {projects: {}};
    },
    componentDidMount: function(){
        request
            .get('/Api/projects')
            .set('Accept', 'application/json')
            .end(function(err, res){
                let projects = JSON.parse(res.text);
                this.setState({
                    projects: projects
                });
            }.bind(this));
    },
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Projects</h2>
                        <hr className="star-primary"></hr>
                    </div>
                </div>
                <ProjectSearchBar projects={this.state.projects} />
                <br/>
                <ProjectsGrid projects={this.state.projects} />
            </div>
        );
    }
});

module.exports = FilterableProjects;