/*
* @Author: alexpelletier
* @Date:   2016-03-21 14:34:05
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-21 17:36:57
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
		    teams     : [{ 
	    		type: mongoose.Schema.Types.ObjectId,
		        ref: 'Team'
			}],
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
