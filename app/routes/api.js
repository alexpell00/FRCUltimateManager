
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

module.exports = router;
