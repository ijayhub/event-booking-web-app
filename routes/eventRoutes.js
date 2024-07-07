const mongoose = require("mongoose")
const Event = require('../models/Events');
const express = require('express');

const router = express.Router();


// navigation route
router.get('/', (req, res) => {
  Event.find()
    .then((result) => {
      res.render('index', { title: 'All event', events: result })
    })
    .catch((err) => {
      console.error(err); 
  })
})

router.get('/about', (req, res) => {
	res.render('about', { title: 'About Eventrix' });
})

router.get('/create', (req, res) => {
  res.render('form', { title: 'Add a New Event' })
})
// form routes
router.post('/event/form', (req, res) => {
  const event = new Event(req.body)
  event.save()
    .then((result) => {
      res.redirect('/') 
      
    })
    .catch((err) => {
      console.error(err);
  })
})

// delete an event
// router.delete('/event/:id', (req, res) => {
// 	const id = req.params.id;
// 	Event.findByIdAndDelete(id)
// 		.then((result) => {
// 			res.json({ redirect: '/' });
// 		})
// 		.catch((err) => {
// 			console.error(err);
// 			res.status(500).json({ error: 'Failed to delete event' });
// 		});
// });

// detail of the event

router.get('/event/:id', (req, res) => {
  const id = req.params.id
  Event.findById(id)
    .then((result) => {
      res.render('details', { event: result, title: 'Event Details' })
    })
    .catch((err) => {
      console.error(err);     
  })
})
// not found page
router.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' })
})
module.exports=router