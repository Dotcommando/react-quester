const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/users', function(req, res, next) {
    //res.send({type: 'GET'});
    User.aggregate().near({
        near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
        maxDistance: 0.9, // radians
        spherical: true,
        distanceField: "dist.calculated"
    })﻿.then(function(users){
        res.send(users);
    });
});


// router.get('/users', function(req, res, next) {
//     res.send({type: 'GET'});
// });

router.post('/users', function(req, res, next) {
    // var user = new User(req.body);
    // user.save();
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
});

router.put('/users/:id', function(req, res, next) {
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(user){
        User.findOne({_id: req.params.id}).then(function(user){
            res.send(user);
        });
    }).catch(next);
});

router.delete('/users/:id', function(req, res, next) {
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.send(user);
    }).catch(next);
});

module.exports = router;