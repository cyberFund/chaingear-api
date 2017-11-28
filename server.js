'use strict';

const express = require('express');

// Constants
const PORT = 8090;
const HOST = '0.0.0.0';


const data = require('./data/chaingear.json');


// App
const app = express();
app.use('/logos', express.static('logos'));

//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/tokens', (req, res) => {
	var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	console.log(' fullUrl ', fullUrl);
	
	const top = data.filter(item => item.ratings && item.ratings.rating_cyber > 0);
	res.json(top);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);