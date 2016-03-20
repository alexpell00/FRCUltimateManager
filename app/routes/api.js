
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var colors = require('colors');

        ////////////
        ///ROUTES///
        ////////////

/* GET home page. */
router.get('/desc', function(req, res, next) {
	res.send("hi");
});

module.exports = router;
