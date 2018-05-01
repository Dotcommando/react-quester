const express = require("express");
const router = express.Router();

router.get('/users', function(req, res) {
    res.send({type: 'GET'});
});

router.post('/users', function(req, res) {
    console.log(req.body);
    res.send({
        type: 'POST',
        username: req.body.username,
        password: req.body.password,
        active: req.body.active
    });
});

router.put('/users/:id', function(req, res) {
    res.send({type: 'PUT'});
});

router.delete('/users/:id', function(req, res) {
    res.send({type: 'DELETE'});
});

module.exports = router;