const express = require('express');
const router = express.Router();
// const request = require('request');

router.get('/', function(req, res) {
    res.render('homepage', {
        title: "homepage",
        style: "./../files/homepage.css",
    });
});




module.exports = router;