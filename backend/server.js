var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
cors = require('cors');

Task = require('./api/models/todoListModel'), //created model loading here

bodyParser = require('body-parser');

var routes = require('./api/routes/todoListRoutes');

const url = 'mongodb+srv://xapirooo:xapiro1258@cluster0-fv3zv.mongodb.net/Tododb';

var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}


// mongoose instance connection url connection
mongoose.connect(url, options);


// verificando a conexão..
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log('conexão ao banco de dados estabelecida e operante ..')
})



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//register the route
routes(app); 

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);