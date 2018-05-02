const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/users');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

app.use('/api', require("./routes/api"));

app.use(function(err, req, res, next){
    console.log(req.params, err);
    res.status(422).send({error: err.message});
});

app.listen(process.env.port || 4000, function(){
    console.log('Now listening for requests...');
});