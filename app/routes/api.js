
var express = require('express');
var passport = require('passport');
var router = express.Router();
var colors = require('colors');
var mongoose = require('mongoose');

        ////////////
        ///ROUTES///
        ////////////

//	Auth
import authRoutes from './ApiRoutes/AuthRoutes';
authRoutes.init(router);

//	Settings
import settingsRoutes from './ApiRoutes/SettingsRoutes';
settingsRoutes.init(router);

//	Scema
import schemaRoutes from './ApiRoutes/ScemaRoutes';
schemaRoutes.init(router);


//Matches
router.get('/Matches/List', function(req, res) {
	var Matches = mongoose.model('Match');
	Matches.find({}).populate('event').populate('teams_red').populate('teams_blue').exec(function (err, docs) {
        res.json(docs);
    });
})

router.post('/Matches/ForTeam', function(req, res) {
    var Matches = mongoose.model('Match');
    var ObjectId = mongoose.Types.ObjectId; 
    console.log(req.body.teamid);
    Matches.find({ $or: [{teams_red: req.body.teamid }, {teams_blue: req.body.teamid }] }).populate('event').populate('teams_red').populate('teams_blue').exec(function (err, docs) {
        res.json(docs);
    });
})

router.get('/Matches/OptionList', function(req, res) {
    var Match = mongoose.model('Match');
    Match.find({}).populate('events').populate('teams_red').populate('teams_blue').exec(function (err, docs) {
        var options = [];
        docs.forEach(function(doc){
            options.push({match: doc,value: doc._id, label: '#' + doc.match_num + ' (' + doc.comp_level + ')'});
        });
        res.json(options);
    });
})

//Teams
router.get('/Teams/List', function(req, res) {
	var Teams = mongoose.model('Team');
	Teams.find({}).populate('events').exec(function (err, docs) {
        res.json(docs);
    });
})

router.get('/Teams/OptionList', function(req, res) {
    var Teams = mongoose.model('Team');
    Teams.find({}).populate('events').exec(function (err, docs) {
        var options = [];
        docs.forEach(function(doc){
            options.push({value: doc._id, label: doc.name + ' (' + doc.number + ')'});
        });
        res.json(options);
    });
})

router.post('/Teams/GetSingle', function(req, res) {
    var Teams = mongoose.model('Team');
    var ObjectId = mongoose.Types.ObjectId; 
    Teams.find({_id:new ObjectId(req.body.teamid)}).populate('events').exec(function (err, docs) {
        res.json(docs[0]);
    });
})

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


module.exports = router;
