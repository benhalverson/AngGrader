var morgan = require('morgan');
var express = require('express');
var app = express()

app.use(morgan('dev'));
app.use(express.static(__dirname + '/app'));

app.listen(process.env.PORT || 3000);
