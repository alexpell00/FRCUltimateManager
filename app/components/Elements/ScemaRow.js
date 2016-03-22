/*
* @Author: alexpelletier
* @Date:   2016-03-21 11:53:58
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-22 00:36:08
*/

import React from 'react';

import Select from 'react-select';


var ScemaRow = React.createClass({
     getInitialState() {
          return {scemaInfo_id: this.props.scemaInfo._id,order: 0, name: this.props.scemaInfo.name,infoType: this.props.scemaInfo.infoType._id, valueType: this.props.scemaInfo.valueType._id,api_path: this.props.scemaInfo.api_path};
     },
	logChange: function(val) {
	    console.log("Selected: " + val);
	}, 
     infoTypeChanged: function(val) {
          if (val != ""){
               this.setState({
                    infoType: val
               });
          }
          this.saveInfo();                                                                                                                         
     },
     valueTypeChanged: function(val){
          if (val != ""){
               this.setState({
                    valueType: val
               });
          }
          this.saveInfo();
     },
     saveInfo: function(){
          this.setState({
               name: this.refs.nameTextInput.value,
               api_path: this.refs.apiTextInput.value
          },function(){
               this.props.save(this.state);
          });
          
     },
     deleteInfo: function(){
          this.props.delete(this.state);
     },
	render() {
          var infoTypeOptions = [];
          this.props.infoTypes.forEach(function(infoType){
               infoTypeOptions.push({value: infoType._id, label: infoType.name});
          }.bind(infoTypeOptions));

          var infoValueOptions = [];
          this.props.valueTypes.forEach(function(infoValue){
               infoValueOptions.push({value: infoValue._id, label: infoValue.name});
          }.bind(infoValueOptions));

		return (
			<div>
                <li className="list-group-item" style={{marginTop: '10px'}}>
                    <div className="row">
                    	<div className="col-sm-1">
                    		<i className="fa fa-sort"></i>
                    	</div>
                    	<div className="col-sm-3">
                    		<form>
                    			<input
						          type="text" placeholder="Name" value={this.state.name} ref="nameTextInput" className="form-control"  onChange={this.saveInfo} 
						        />
                    		</form>
                    	</div>
                    	<div className="col-sm-2">
               			<Select
							    name="form-field-name" value={this.state.infoType} ref="infoTypeInput" options={infoTypeOptions} className="" onChange={this.infoTypeChanged}
							/>
                    	</div>
                    	<div className="col-sm-2">
               			<Select
							  name="form-field-name" value={this.state.valueType} ref="valueTypeInput" options={infoValueOptions} className="" onChange={this.valueTypeChanged}
							/>
                    	</div>
                    	<div className="col-sm-3">
                    		<form>
                    			<input
						          type="text" placeholder="Blue Alliance Api Data Path" value={this.state.api_path} ref="apiTextInput" className="form-control" onChange={this.saveInfo}
						        />
                    		</form>
                    	</div>
                    	<div className="col-sm-1">
                    		<a className="close" data-dismiss="alert" href="#" aria-hidden="true" onClick={this.deleteInfo}>&times;</a>
                    	</div>
                    </div>	
                </li>
			</div>
		);
	}
});

module.exports = ScemaRow;
