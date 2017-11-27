'use strict';

const express = require('express');

// Constants
const PORT = 8090;
const HOST = '0.0.0.0';


const data = require('./data/chaingear.json');


// App
const app = express();
app.get('/api/tokens', (req, res) => {
	const top = data.filter(item => item.ratings && item.ratings.rating_cyber > 0);
	res.json(top);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);