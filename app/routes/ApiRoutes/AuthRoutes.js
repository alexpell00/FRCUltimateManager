/*
* @Author: alexpelletier
* @Date:   2016-03-22 17:44:32
* @Last Modified by:   alexpelletier
* @Last Modified time: 2016-03-22 17:44:56
*/
var express = require('express');
var passport = require('passport');
var router = express.Router();
var colors = require('colors');
var mongoose = require('mongoose');

module.exports = {
	init(router) {
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
	}
}