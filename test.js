var caller = require('./modules/ws-caller.js');

caller('http://localhost/article/view/1','GET',null,function(res){
	var body="";
	console.log("Got response: " + res.statusCode);
	  res.on('data',function(d){
	  body += d;
	 }).on('end', function(){
	  console.log(res.headers)
	  console.log(body)
	 });
});
