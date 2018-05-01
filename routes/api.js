const express = require("express");
const router = express.Router();

router.get('/users', function(req, res) {
    res.send({type: 'GET'});
});

router.post('/users', function(req, res) {
    res.send({
        type: 'POST',
        name: req.body.name,
        rank: req.body.rank
    });
});

router.put('/users/:id', function(req, res) {
    res.send({type: 'PUT'});
});

router.delete('/users/:id', function(req, res) {
    res.send({type: 'DELETE'});
});

module.exports = router;