var express = require('express');
var app = express();

app.get('/',function (req,res){
	res.send('hello rajiv');
});

app.listen(8081,function(){
	console.log('Example app listening on port 3000!');
});

