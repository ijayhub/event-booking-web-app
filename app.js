require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const eventRoutes = require('./routes/eventRoutes')



// initalize the express module
const app = express()

// initalize mongoose
mongoose
	.connect(process.env.DBURL)
	.then((result) => {
		console.log('connected');
		app.listen(process.env.PORT, () => {
			console.log('Server working');
		});
	})
	.catch((err) => {
		console.error(err);
	});
		
// define the template 
app.set('view engine', 'ejs')

// middleware amd static file
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// all routes
app.use(eventRoutes)

	
