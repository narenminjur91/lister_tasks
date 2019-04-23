//Require modules
var express = require('express');
var fs = require('fs');
var nunjucks = require("nunjucks");

var app = express();//Object to use the Express API
var port = 8000;//Port number to listen

//Configure Nunjuks with the required options
nunjucks.configure(__dirname, {
  autoescape: true,
  express: app
});

//Listen using the specified port
app.listen(port, function(){
  console.log("Listening on port:"+port);
});

//Redirect locahost to index.html
app.get('/', function(req, res){
  app.use(express.static(__dirname));//Add static middleware to serve css, js and img.

  //Read JSON file to get the contents for template
  fs.readFile("template_data.json", function(err, data){
    if(!err)
    {
      data = JSON.parse(data);
      res.render('index.html', data);//Render the template using the JSON data from the JSON file.
    }
    else
    {
      res.render('error_500.html');//Render error page if JSON file could not be read.
      console.error(err);
    }
  });
});
