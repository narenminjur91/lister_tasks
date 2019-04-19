var express = require('express');
var app = express();
var port = 8000;

app.get('/', function(req, res){
  res.sendFile('index.html',{root:__dirname});
});
app.get('/uikit-3.0.3/:dirname/:filename', function(req, res) {
  res.sendFile('uikit-3.0.3/'+req.params.dirname+'/'+req.params.filename,{root:__dirname});
});
app.get('/img/:filename', function(req, res) {
  res.sendFile('img/'+req.params.filename,{root:__dirname});
});

app.listen(port, function(){
  console.log("Litening on port:"+port);
});