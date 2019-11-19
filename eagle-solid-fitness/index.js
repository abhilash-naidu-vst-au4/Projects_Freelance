const express = require('express'); 
const app = express();
const exphbs = require('express-handlebars');

const cors = require('cors');
const fs = require('fs');

const MongoClient = require('mongodb').MongoClient;

const PORT = 5500;
app.use(cors());

// Setting a static directory for all assets

app.use('/files', express.static('files'));

// Separating all routes

const routes = require('./routes/routes');
app.use('/', routes);

// Using Express' default body parser

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Configuration of Handlebars
app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

// Start the app on pre defined port number
app.listen(PORT, function() {
	console.log("Application has started and running on port: ", PORT);
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
});

// Handles all 404 errors (must be at the end of index.js)

app.get('*', function(req, res) {
	res.render('404', {
		title: "404 Not Found"}
		);
  })
