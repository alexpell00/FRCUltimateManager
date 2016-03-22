/*
* @Author: alexpelletier
* @Date:   2016-03-21 14:34:05
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-22 15:58:35
*/

var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

module.exports = {
	init() {
		this.MatchScema();
		this.EventScema();
		this.TeamScema();
		this.UserScema();
		this.ScemasSchema();
		this.ScemaInfoTypeScema();
		this.ScemaValueTypeScema();
		this.ScemaInfoScema();
		this.ScemaDataScema();
		this.SchemaSettings();
		//setup
		// var ScemaValueTypes = mongoose.model('ScemaValueType');
		// var v1 = new ScemaValueTypes();
		// v1.name = 'Integer';
		// v1.save();
		// var v2 = new ScemaValueTypes();
		// v2.name = 'Float';
		// v2.save();
		// var v3 = new ScemaValueTypes();
		// v3.name = 'Boolean';
		// v3.save();
		// var v4 = new ScemaValueTypes();
		// v4.name = 'String';
		// v4.save();
		// var v5 = new ScemaValueTypes();
		// v5.name = 'Counter';
		// v5.save();
		// var v6 = new ScemaValueTypes();
		// v6.name = 'Up-Down';
		// v6.save();

	},

	SchemaSettings() {
		var SettingsSchemaBlueprint = new Schema({
		    team     : String,
		    year      : String,
		    activeSchema : { 
		    	type: Schema.Types.ObjectId,
				ref: 'Scemas'
			}
		});
		return mongoose.model('Settings', SettingsSchemaBlueprint)
	},

	ScemaDataScema() {
		var ScemaInfoScemaBlueprint = new Schema({
		    match 	: { 
		    	type: Schema.Types.ObjectId,
				ref: 'Match'
			},
			teams 	: [{ 
		    	type: Schema.Types.ObjectId,
				ref: 'Team'
			}],
			alliance	: String,
			scemaInfo 	: { 
		    	type: Schema.Types.ObjectId,
				ref: 'ScemaInfo'
			},
			data	: String,
			data_sec	: String,
			data_ter	: String

		});
		return mongoose.model('ScemaData', ScemaInfoScemaBlueprint)
	},

	ScemaInfoScema() {
		var ScemaInfoScemaBlueprint = new Schema({
		    name     : String,
		    infoType 	: { 
		    	type: Schema.Types.ObjectId,
				ref: 'ScemaInfoType'
			},
			valueType 	: { 
		    	type: Schema.Types.ObjectId,
				ref: 'ScemaValueType'
			},
			scema 	: { 
		    	type: Schema.Types.ObjectId,
				ref: 'Scemas'
			},
			api_path	: String,
			order	: Number
		});
		return mongoose.model('ScemaInfo', ScemaInfoScemaBlueprint)
	},

	ScemaValueTypeScema() {
		var ScemaValueTypeScemaBlueprint = new Schema({
		    name     : String
		});
		return mongoose.model('ScemaValueType', ScemaValueTypeScemaBlueprint)
	},

	ScemaInfoTypeScema() {
		var ScemaInfoTypeScemaBlueprint = new Schema({
		    name     : String
		});
		return mongoose.model('ScemaInfoType', ScemaInfoTypeScemaBlueprint)
	},

	ScemasSchema() {
		var ScemasSchemaBlueprint = new Schema({
		    name     : String,
		    year      : String
		});
		return mongoose.model('Scemas', ScemasSchemaBlueprint)
	},

	MatchScema() {
		var MatchScemaBlueprint = new Schema({
		    key     : String,
		    comp_level      : String,
		    event 	: { 
		    	type: Schema.Types.ObjectId,
				ref: 'Event'
			},
		    time    : Number,
		    match_num	: Number,
		    teams_red     : [{ 
	    		type: mongoose.Schema.Types.ObjectId,
		        ref: 'Team'
			}],
			teams_blue     : [{ 
	    		type: mongoose.Schema.Types.ObjectId,
		        ref: 'Team'
			}]
		});
		return mongoose.model('Match', MatchScemaBlueprint)
	},

	EventScema() {
		var EventScemaBlueprint = new Schema({
		    key     : String,
		    name      : String,
		    event_code : String,
		    year    : Number,
		    teams     : [{ 
	    		type: mongoose.Schema.Types.ObjectId,
		        ref: 'Team'
		    }],
		    matches     : [{ 
	    		type: mongoose.Schema.Types.ObjectId,
		        ref: 'Match'
		    }],
		    event_type     : String
		});
		return mongoose.model('Event', EventScemaBlueprint)
	},

	TeamScema() {
		var TeamSchemaBlueprint = new Schema({
		    number     : Number,
		    name      : String,
		    locality : String,
		    region    : String,
		    location     : String,
		    events     : [{ 
	    		type: mongoose.Schema.Types.ObjectId,
		        ref: 'Event'
		    }],
		    photos     : [String],
		    website     : String
		});
		return mongoose.model('Team', TeamSchemaBlueprint)
	},

	UserScema() {
		var UserScemaScemaBlueprint = new Schema({
		    username     : String,
		    password      : String,
		    fullname	: String
		});

		UserScemaScemaBlueprint.plugin(passportLocalMongoose);

		return mongoose.model('User', UserScemaScemaBlueprint)
	},
}
