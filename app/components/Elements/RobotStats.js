/*
* @Author: alexpelletier
* @Date:   2016-03-24 05:42:55
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-24 05:44:43
*/

import React from 'react';
import request from 'superagent';

var RobotStats = React.createClass({
	getInitialState() {
		return {scemaData:{}};
	},
	componentDidMount() {
		request
            .post('/Api/Scema/GetRobotStats')
            .send({'teamid':this.props.teamid})
            .set('Accept', 'application/json')
            .end(function(err, res){
                let data = JSON.parse(res.text);
                //group
                var sortedData = {};
                data.forEach(function(scemaData){
                	if (sortedData[scemaData.scemaInfo._id]){
                		sortedData[scemaData.scemaInfo._id].push(scemaData);
                	}else{
                		sortedData[scemaData.scemaInfo._id] = [scemaData];
                	}
                });
                console.log(sortedData);
            	this.setState({
                    scemaData: sortedData
                });
            }.bind(this));
	},
	render: function() {
		var content = [];
		if (Object.keys(this.state.scemaData).length > 0){
			for (var infoid in this.state.scemaData){
				var title = this.state.scemaData[infoid][0].scemaInfo.name;
				var valueType = this.state.scemaData[infoid][0].scemaInfo.valueType.name
				content.push(<h3>{title}:</h3>)
				var total = 0;
				this.state.scemaData[infoid].forEach(function(data){
					if (valueType == 'Float' || valueType == 'Integer' || valueType == 'String' || valueType == 'Scale'){
						content.push(<span key={data._id}>{data.data}, </span>);
					}else if(valueType == 'Boolean'){
						content.push(<span key={data._id}>{data.data}, </span>);
					}else if(valueType == 'Counter'){
						content.push(<span key={data._id}>{data.data}, </span>);
					}else if(valueType == 'Up-Down'){
						var percent = (parseInt(data.data)/(parseInt(data.data) + parseInt(data.data_sec)))*100;
						content.push(<span key={data._id}>{data.data}/{data.data_sec}={percent}%, </span>);
					}
					if (valueType == 'Float' || valueType == 'Integer' || valueType == 'Scale' || valueType == 'Counter'){
						total += parseInt(data.data);
					}
					if (valueType == 'Up-Down'){
						var percent = (parseInt(data.data)/(parseInt(data.data) + parseInt(data.data_sec)))*100;
						total += percent;
					}
				});
				if (total != 0){
					console.log(total);
					var average = total/this.state.scemaData[infoid].length;
					content.push(<span key={infoid}><br/>Average: {average}</span>);
				}
			}
		}
		return (
			<div>
				{content}
			</div>
		);
  }
});

module.exports = RobotStats;