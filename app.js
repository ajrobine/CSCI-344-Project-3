
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');
var awesome = require('./controllers/awesome');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/andrewrobinette', function(req, res) {
	res.send('Welcome to the profile of Andrew Robinette');
});
app.get('/users/:user', routes.user);

app.get('/word/awesome', function(req, res) {
	res.render('word/awesome', {}});
});
app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
