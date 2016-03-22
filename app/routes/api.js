
var express = require('express');
var passport = require('passport');
var router = express.Router();
var colors = require('colors');
var mongoose = require('mongoose');

        ////////////
        ///ROUTES///
        ////////////

///Managment/TeamMembers
router.post('/Managment/TeamMembers/Add', function(req, res) {
	var User = mongoose.model('User');
	User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            return res.send(err);
        }

        user.fullname = req.body.name;
    	user.save();
        res.json(user);
    });
})

router.get('/Managment/TeamMembers', function(req, res) {
	var User = mongoose.model('User');
	User.find({}, function (err, docs) {
        res.json(docs);
    });
})

//	Auth
router.post('/Login', passport.authenticate('local'), function(req, res) {
    res.status(200).json({status:'logged in'});
});

router.get('/Logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/isAuth', function(req, res) {
	if (!req.isAuthenticated()){
		req.body.username = 'alexpell00@yahoo.com';
		req.body.password = 'password';

		passport.authenticate('local')(req, res, function () {
            res.send({status: req.isAuthenticated()});
        });
        return
	}
    res.send({status: req.isAuthenticated()});
});

router.get('/Self', function(req, res) {
    res.send(req.user);
});

//	Settings
router.get('/Settings/GetSettings', function(req, res) {
	var Settings = mongoose.model('Settings');
	Settings.find({}, function (err, docs) {
        res.json(docs[0]);
    });
});
router.post('/Settings/SaveSettings', function(req, res) {
	var Settings = mongoose.model('Settings');
	Settings.find({}, function (err, docs) {
        var setting = docs[0];
        setting.year = req.body.year;
        setting.team = req.body.team;
        setting.activeSchema = req.body.activeSchema;
        setting.save();
        res.json(setting);
    });
});

router.get('/Settings/PullRegionals', function(req, res) {
	var Settings = mongoose.model('Settings');
	Settings.find({}, function (err, docs) {
        var setting = docs[0];

        var options = {
		  host: 'www.thebluealliance.com',
		  port: 80,
		  path: '/api/v2/team/frc'+setting.team+'/' + setting.year +'/events',
		  headers: {
		  	'X-TBA-App-Id': '2972:frcultimatemanager:1.0'
		  }
		};

		var http = require("http");
		http.get(options, function(response) {

			//remove current regionals
			var Events = mongoose.model('Event');
			Events.find({}, function (err, docs) {
				docs.forEach(function(doc){
					var ObjectId = mongoose.Types.ObjectId; 
					var Matches = mongoose.model('Match');
					Matches.find({event: new ObjectId(doc._id)}).remove().exec();

					doc.remove();
				});
			});

			var buffer = ""

			response.setEncoding('utf8');
			response.on('data', function (chunk) {
				buffer += chunk;
			});
			response.on('end',function(err){
				if (!err){
					let regionals = JSON.parse(buffer);

					regionals.forEach(function(regional){
						var Events = mongoose.model('Event');

						var event = new Events();
						event.key = regional.key;
						event.name = regional.name;
						event.event_code = regional.event_code;
						event.year = regional.year;
						event.event_type = regional.event_type_string;
						event.save();
					});
					res.send(regionals.length + ' Regionals Added');
				}
			})
		});
    });
});

router.get('/Settings/UpdateTeams', function(req, res) {
	var Teams = mongoose.model('Team');
	Teams.find({}, function (err, teams) {
		teams.forEach(function(team){
			var options = {
				  host: 'www.thebluealliance.com',
				  port: 80,
				  path: '/api/v2/team/frc'+team.number,
				  headers: {
				  	'X-TBA-App-Id': '2972:frcultimatemanager:1.0'
				  }
				};

				var http = require("http");
				http.get(options, function(response) {

					//remove current regionals
					var buffer = ""

					response.setEncoding('utf8');
					response.on('data', function (chunk) {
						buffer += chunk;
					});
					response.on('end',function(err){
						if (!err){
							let teamInfo = JSON.parse(buffer);

							team.name = teamInfo.name;
							team.region = teamInfo.region;
							team.location = teamInfo.location;
							team.locality = teamInfo.locality;
							team.website = teamInfo.website;
							team.save();
						}
					})
				});

		});//END TEAMS LOOP
		res.send(teams.length + ' Teams Updated');
    });
});

router.get('/Settings/PullMatches', function(req, res) {
	var Event = mongoose.model('Event');
	var Team = mongoose.model('Team');

	var matchesCnt = 0;
	var loopCnt = 0;
	Event.find({}, function (err, docs) {
		Team.find({}, function (err, ts) {
			console.log("Team Members:" + ts.length);
			var teams = {};
			if (ts.length > 0){
				ts.forEach(function(team){
					teams[team.number] = team;
				});
			}
			docs.forEach(function(event){
				var options = {
				  host: 'www.thebluealliance.com',
				  port: 80,
				  path: '/api/v2/event/' + event.key +'/matches',
				  headers: {
				  	'X-TBA-App-Id': '2972:frcultimatemanager:1.0'
				  }
				};

				var http = require("http");
				http.get(options, function(response) {

					//remove current regionals
					var Matches = mongoose.model('Match');
					var ObjectId = mongoose.Types.ObjectId; 
					Matches.find({event: new ObjectId(event._id)}).remove().exec();

					var buffer = ""

					response.setEncoding('utf8');
					response.on('data', function (chunk) {
						buffer += chunk;
					});
					response.on('end',function(err){
						loopCnt += 1;

						if (!err){
							let matches = JSON.parse(buffer);

							matches.forEach(function(m){
								var blueTeams = [];
								var redTeams = [];

								m.alliances.blue.teams.forEach(function(teamKey){
									var teamNum = teamKey.replace('frc','');

									if (teams[teamNum]){
										blueTeams.push(teams[teamNum]);
									}else{
										var team = new Team();
										team.number = teamNum;
										team.save();
										blueTeams.push(team);

										teams[teamNum] = team;
									}
								});

								m.alliances.red.teams.forEach(function(teamKey){
									var teamNum = teamKey.replace('frc','');

									if (teams[teamNum]){
										redTeams.push(teams[teamNum]);
									}else{
										var team = new Team();
										team.number = teamNum;
										team.save();
										redTeams.push(team);

										teams[teamNum] = team;
									}
								});

								var Match = mongoose.model('Match');

								var match = new Match();
								match.comp_level = m.comp_level;
								match.event = new ObjectId(event._id)
								match.time = m.time;
								match.match_num = m.match_number;
								match.key = m.key;
								match.teams_blue = blueTeams;
								match.teams_red = redTeams;
								match.save();
								// console.log(match);
							});
							matchesCnt += matches.length
						}else{
							console.log(err);
						}

						if (loopCnt == docs.length){
							res.send(matchesCnt + ' Mathces Added');
						}
					})
				});
			}); //END EVENTS LOOP
		});
    });
});

//	Scema
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

module.exports = router;
