var express = require('express');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/page1', function(request, response) {
  response.render('pages/index');
});

app.post('/page2',function(request, response) {
  response.send(request.body);
response.render('pages/index');
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
