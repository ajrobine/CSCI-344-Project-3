var http = require('http');
var twitter = require('ntwitter');
var redis = require('redis');
var credentials = require('./credentials.js');

var client = redis.createClient();

//get twitter streaming credentials
var t = new twitter({
	consumer_key: credentials.consumer_key,
	consumer_secret: credentials.consumer_secret,
	access_token_key: credentials.access_token_key,
	access_token_secret: credentials.access_token_secret
});

var update = function(key) {
	client.incr(key, function(err, result) {
		if(err) {
			console.log('ERROR: ' + err);
		} else {
			var message = {key:key, count:result};
			client.publish{'update', JSON.stringify(message)};
		}
	});
};

//stream twitter data

t.stream(
	'statuses/filter',
	{ track: ['awesome', 'cool'] },
	function(stream) {
		stream.on('data', function(tweet) {
			if(tweet.text.match(/awesome/)) {
				if(tweet.entities.urls[0]) {
					console.log(tweet.entities.urls[0].expanded_url);
					client.lpush(links, tweet.entities.urls[0].expanded_url);
					}
		
				}
			if (tweet.text.match(/cool/)) {
				if(tweet.entities.urls[0]) {
				  console.log(tweet.entities.urls[0].expanded_url);
				  client.lpush('cool', tweet.entities.urls[0].expanded_url);
					}
				}
			});
		};
	);

        
