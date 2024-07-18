const mongoose = require("mongoose")
const express = require('express');
const eventcontroller = require('../controllers/eventcontroller')

const router = express.Router();


// navigation route
router.get('/', eventcontroller.getAllEvent)
router.get('/about', eventcontroller.getAboutEvent)
router.get('/create', eventcontroller.getFormEvent)






// form routes
router.post('/', eventcontroller.getFormPostEvent)

// delete an event
router.delete('/event/:id', eventcontroller.deleteEvent)

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