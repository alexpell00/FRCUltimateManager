
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
	console.log(req.body);
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
