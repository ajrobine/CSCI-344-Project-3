
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.user = function(req, res){
	res.send('Welcome to the profile of ' + req.params.user + '!');
}

var redis = require('redis');
var client = redis.createClient();

exports.awesome = function(req, res){
   client.lrange('urls', 0, 5, function(err, links) {
	var larray = new Array();
	if(err) console.log(err);
	else {
	  if (urls) {
		
		for (var a = 0; a < 5; a++) {
		  if(links[a]) {
			console.log(links[a]);
			larray[a] = links[a];
		  } else {
			urls[a] == "";
		  }
		}

	res.render('awesome', { word: "awesome" ,
				url0: larray[0] , 
				url1: larray[1] ,
				url2: larray[2] ,
				url3: larray[3] ,
				url4: larray[4]
				});
	} else {
	  res.render('index', { title: 'awesome urls', message: 'No awesome links yet.' })
	}
      }
  });
};

exports.cool = function(req, res){
  client.lrange('cool', 0, 5, function(err, urls) {
	var larray = new Array();
	if(err) console.log(err);
	else {
	  if (urls) {
		for (var a = 0; a < 5; a++) {
		  if(urls[a]) {
		    console.log(urls[a]);
		    larray[a] = urls[a];
		  } else {
		    urls[a] == "";
		  }
		}

		res.render('awesome', { word: "cool" , 
					url0: larray[0] ,
					url1: larray[1] ,
					url2: larray[2] ,
					url3: larray[3] ,
					url4: larray[4] ,
					});
		} else {
		  res.render('index', { title: 'awesome urls' , message: 'No urls yet.' })
		}
	      }
	});
};

