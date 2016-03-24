/*
* @Author: alexpelletier
* @Date:   2016-03-22 17:43:32
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-24 05:45:23
*/

var express = require('express');
var passport = require('passport');
var router = express.Router();
var colors = require('colors');
var mongoose = require('mongoose');

module.exports = {
	init(router) {
		router.get('/Scema/PitInfos', function(req, res) {
			var ScemaInfo = mongoose.model('ScemaInfo');
			ScemaInfo.find({infoType: '56f0cac141c02c1e59f03e02'}).populate('valueType').exec(function (err, docs) {
		        res.json(docs);
		    });
		});
		
		router.get('/Scema/RobotMatchInfos', function(req, res) {
			var ScemaInfo = mongoose.model('ScemaInfo');
			ScemaInfo.find({infoType: '56f0cac141c02c1e59f03e04'}).populate('valueType').exec(function (err, docs) {
		        res.json(docs);
		    });
		});

		router.get('/Scema/Scemas', function(req, res) {
			var Scemas = mongoose.model('Scemas');
			Scemas.find({}, function (err, docs) {
		        res.json(docs);
		    });
		});

		router.get('/Scema/ScemaInfoTypes', function(req, res) {
			var ScemaInfoTypes = mongoose.model('ScemaInfoType');
			ScemaInfoTypes.find({}, function (err, docs) {
		        res.json(docs);
		    });
		});

		router.get('/Scema/ScemaValueTypes', function(req, res) {
			var ScemaValueTypes = mongoose.model('ScemaValueType');
			ScemaValueTypes.find({}, function (err, docs) {
		        res.json(docs);
		    });
		});

		router.post('/Scema/ScemaInfos', function(req, res) {
			var ScemaInfos = mongoose.model('ScemaInfo');
			var ObjectId = require('mongoose').Types.ObjectId; 
			ScemaInfos.find({scema: new ObjectId(req.body.scema_id)}).populate('infoType').populate('valueType').exec(function (err, docs) {
		        res.json(docs);
		    });
		});

		router.post('/Scema/GetPitStats', function(req, res) {
			var ScemaData = mongoose.model('ScemaData');
			ScemaData.find({teams:req.body.teamid}).populate('scemaInfo').exec(function (err, docs) {
				var options = {
			      path: 'scemaInfo.infoType',
			      model: 'ScemaInfoType'
			    };
			    ScemaData.populate(docs, options, function (err, docsWithInfo) {
			    	var pitData = [];
			    	docsWithInfo.forEach(function(doc){
			    		if (doc.scemaInfo.infoType.name == 'Pit'){
			    			pitData.push(doc);
			    		}
			    	});

			    	options = {
				      path: 'scemaInfo.valueType',
				      model: 'ScemaValueType'
				    };
				    ScemaData.populate(pitData, options, function (err, scemaData) {
				    	res.json(scemaData);
				    });
			    });
		    });
		});

		router.post('/Scema/GetRobotStats', function(req, res) {
			var ScemaData = mongoose.model('ScemaData');
			ScemaData.find({teams:req.body.teamid}).populate('scemaInfo').exec(function (err, docs) {
				var options = {
			      path: 'scemaInfo.infoType',
			      model: 'ScemaInfoType'
			    };
			    ScemaData.populate(docs, options, function (err, docsWithInfo) {
			    	var pitData = [];
			    	docsWithInfo.forEach(function(doc){
			    		if (doc.scemaInfo.infoType.name == 'Match_Robot'){
			    			pitData.push(doc);
			    		}
			    	});

			    	options = {
				      path: 'scemaInfo.valueType',
				      model: 'ScemaValueType'
				    };
				    ScemaData.populate(pitData, options, function (err, scemaData) {
				    	res.json(scemaData);
				    });
			    });
		    });
		});

		router.post('/Scema/SavePitScout', function(req, res) {
			var ScemaData = mongoose.model('ScemaData');
			var team = req.body.teamnumber;
			var scemaData = req.body.scemaData;

			for (var infoType in scemaData) {
				var data = new ScemaData();
				data.teams = [team];
				data.scemaInfo = infoType;
				if (scemaData[infoType]['data1']){
					data.data = scemaData[infoType]['data1'];
				}
				if (scemaData[infoType]['data2']){
					data.data_sec = scemaData[infoType]['data2'];
				}
				data.save();
			}
		});

		router.post('/Scema/SaveRobotMatch', function(req, res) {
			var ScemaData = mongoose.model('ScemaData');
			var scemaData = req.body.scemaData;
			for (var dataTag in scemaData) {
				var team = dataTag.split('~')[1];
				var infoType = dataTag.split('~')[0];

				var data = new ScemaData();
				data.teams = [team];
				data.match = req.body.match;
				data.scemaInfo = infoType;
				if (scemaData[dataTag]['data1']){
					data.data = scemaData[dataTag]['data1'];
				}
				if (scemaData[dataTag]['data2']){
					data.data_sec = scemaData[dataTag]['data2'];
				}
				data.save();
			}
		});


		router.post('/Scema/AddRow', function(req, res) {
			var ScemaInfo = mongoose.model('ScemaInfo');
			var ObjectId = require('mongoose').Types.ObjectId; 
			var scemaInfo = new ScemaInfo();
			scemaInfo.name = 'Attribute Name';
			scemaInfo.api_path = '';
			scemaInfo.scema = new ObjectId(req.body.scema_id);
			scemaInfo.valueType = new ObjectId('56f0cb580adffac759d7b375'); //Integer
			scemaInfo.infoType = new ObjectId('56f0cac141c02c1e59f03e02'); //Pit
			scemaInfo.order = 0;
			scemaInfo.save();

			res.json(scemaInfo);
		});

		router.post('/Scema/SaveScemaInfo', function(req, res) {
			var ScemaInfos = mongoose.model('ScemaInfo');
			var ObjectId = require('mongoose').Types.ObjectId; 
			ScemaInfos.find({_id: new ObjectId(req.body.scemaInfo_id)}).exec(function (err, docs) {
				if (docs.length == 1){
					var scemaInfo = docs[0];

					scemaInfo.name = req.body.name;
					scemaInfo.api_path = req.body.api_path;
					scemaInfo.valueType = new ObjectId(req.body.valueType); 
					scemaInfo.infoType = new ObjectId(req.body.infoType); 
					scemaInfo.order = req.body.order;
					scemaInfo.save(function(err,scemaInfo){
						ScemaInfos.find({scema: new ObjectId(scemaInfo.scema)}).populate('infoType').populate('valueType').exec(function (err, docs) {
					        res.json(docs);
					    });
					});
				}
		    });
		});

		router.post('/Scema/DeleteScemaInfo', function(req, res) {
			var ScemaInfos = mongoose.model('ScemaInfo');
			var ObjectId = require('mongoose').Types.ObjectId; 
			ScemaInfos.find({_id: new ObjectId(req.body.scemaInfo_id)}).exec(function (err, docs) {
				if (docs.length == 1){
					var scemaInfo = docs[0];
					scemaInfo.remove(function(){
						scemaInfo.save(function(err,scemaInfo){
							ScemaInfos.find({scema: new ObjectId(scemaInfo.scema)}).populate('infoType').populate('valueType').exec(function (err, docs) {
						        res.json(docs);
						    });
						});
					});
				}
		    });
		});
	}
}