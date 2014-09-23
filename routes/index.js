module.exports = function Route(app){
  var users = {};
  var world = [
  	[2,2,2,2,2,2,2,2,2,2,2,2,2],
	[2,0,0,0,0,0,0,0,0,0,0,0,2],
	[2,0,0,0,0,0,0,0,0,0,0,0,2],
	[2,0,0,0,0,0,0,0,0,0,0,0,2],
  	[2,2,0,2,0,2,0,2,0,2,2,2,2],
	[2,0,0,0,0,0,0,0,0,0,0,0,2],
	[2,0,0,0,0,0,0,0,0,0,0,0,2],
	[2,0,0,0,0,0,0,0,0,0,0,0,2],
	[2,0,0,0,0,0,0,0,0,0,0,0,2],
	[2,2,2,2,2,2,2,2,2,2,2,2,2]
  ];

  app.get('/', function(req, res){
    res.render('index', {title:'Welcome Page'});
  });

  app.io.route('coord_info', function(req){
  	console.log('got new user', req.sessionID);
  	users[req.sessionID] = {
  		x: req.data.coordinate.x,
  		y: req.data.coordinate.y
  	}
  	broadcastInfo();
  });

  function broadcastInfo()
  {
  	app.io.broadcast('info', {players: users, world: world});
  }

 //you will add more routes and logic here but this is how to write the default route for your project
}