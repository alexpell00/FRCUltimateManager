/* 
* @Author: alexpelletier
* @Date:   2016-01-10 22:39:22
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-01-24 01:25:20
*/
import React from 'react';
import request from 'superagent';
require("./Description.css");

var Description = React.createClass({
  getInitialState: function() {
    return {desc: ""};
  },
  componentDidMount: function(){
    request
    .get('/Api/desc')
    .end(function(err, res){
      console.log(res.text);
      this.setState({
        desc: res.text
      });
    }.bind(this));
  },
  render: function() {
    return (
      <div className="bio">{this.state.desc}</div>
    );
  }
});

module.exports = Description;