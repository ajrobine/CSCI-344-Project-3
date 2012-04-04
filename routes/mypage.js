//a route for my own personal page

exports.index = function(req, res){
	res.render('index', { title: 'Express' })
};

exports.user = function(req, res) {
	res.send('Welcome to the profile of ' + req.params.user + '!');
}

exports.index = function(req, res){
	res.render('index', { title:'Welcome to the Andrew Robinette page!' })
};
