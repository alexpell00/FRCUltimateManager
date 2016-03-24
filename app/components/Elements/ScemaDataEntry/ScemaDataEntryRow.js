/*
* @Author: alexpelletier
* @Date:   2016-03-24 01:35:21
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-24 05:27:35
*/

import React from 'react';

var ScemaDataEntryRow = React.createClass({
	getInitialState() {
		return {data1: '', data2: '',teamid: ''};
	},
	componentDidMount() {
		var valueType = this.props.scemaInfo.valueType.name;

		if(valueType == 'Counter'){
			this.setState({
				data1: 0
			});
		}else if(valueType == 'Up-Down'){
			this.setState({
				data1: 0,
				data2: 0
			});
		}

		if (this.props.teamid){
			this.setState({
				teamid: this.props.teamid
			});
		}
		
	},
	onData1Change() {
		var data = this.refs.data1.value;
		var valueType = this.props.scemaInfo.valueType.name;
		if (valueType == 'String'){
			data = '' + data;
		}else if(valueType == 'Integer'){
			data = parseInt(data,10);
		}else if(valueType == 'Float'){
			data = parseFloat(data,10);
		}else if(valueType == 'Boolean'){
			data = this.refs.data1.checked;
		}else if(valueType == 'Counter'){
			data = this.state.data1 + 1;
		}else if (valueType == 'Up-Down'){
			data = this.state.data1 + 1;
		}else if (valueType == 'Scale'){	
			data = parseInt(data,10);
			if (data > 10 || data < 1){
				data = 5;
			}
		}

		this.setState({
			data1: data
		},function(){
			this.save();
		});
	},
	onData2Change() {
		var data = this.refs.data1.value;
		var valueType = this.props.scemaInfo.valueType.name;
		if (valueType == 'Up-Down'){
			data = this.state.data2 + 1;
		}

		this.setState({
			data2: data
		},function(){
			this.save();
		});
	},
	save() {
		var tag = this.props.scemaInfo._id;
		if (this.state.teamid != ""){
			tag += '~' + this.state.teamid;
		}
		console.log(tag);
		this.props.update(this.state,tag);
	},
	render: function() {
		var inputField;
		var valueType = this.props.scemaInfo.valueType.name;
		var followUp = "";

		if (valueType == 'Float' || valueType == 'Integer' || valueType == 'String' || valueType == 'Scale'){
			inputField = <input type="text" placeholder={'(' + this.props.scemaInfo.valueType.name + ')'} ref="data1" className="form-control"  onChange={this.onData1Change} />
		}else if(valueType == 'Boolean'){
			inputField = <input type="checkbox" ref="data1" onChange={this.onData1Change} />
		}else if(valueType == 'Counter'){
			inputField = <input type="button" className='btn btn-default' value='Add' ref="data1" onClick={this.onData1Change} />
			followUp = ' (' + this.state.data1 + ")"
		}else if(valueType == 'Up-Down'){
			inputField = []
			inputField.push(<input type="button" className='btn btn-default' value={'+1 ' + this.props.scemaInfo.name.split(', ')[1]} ref="data1" onClick={this.onData1Change} />)
			inputField.push(" (" + this.state.data1 + ") ");
			inputField.push(<input type="button" className='btn btn-default' value={'+1 ' + this.props.scemaInfo.name.split(', ')[2]} ref="data2" onClick={this.onData2Change} />)
			inputField.push(" (" + this.state.data2 + ") ");
		}

		return (
			<section className="list-group-item" style={{marginTop: '10px', fontSize: '15px'}}>
				<div className="row">
	            	<div className="col-sm-3">
	            		{this.props.scemaInfo.name.split(', ')[0]}
	            	</div>
	            	<div className="col-sm-9">
                		{inputField} {followUp}
                	</div>
	            </div>	
			</section>
		);
	}
});

module.exports = ScemaDataEntryRow; 