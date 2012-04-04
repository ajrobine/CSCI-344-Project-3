var words = {};
var client = redis.createClient();

words.index = function(req, res) {
	client.keys('*', function(err, keys) {	
	  console.log(keys);
	//get all words from redis, and list them on the page
	res.render('words/index', {keys:keys});
};

words.delete = function(req, res) {
	client.del(req.params.word, function(err, response) {
	console.log(response);
	
	});
};

module.exports = words;
