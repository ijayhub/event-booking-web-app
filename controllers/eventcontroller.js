const Event = require('../models/Events');



// homepage
const getAllEvent = (req, res) => {
  Event.find()
    .then((result) => {
      res.render('index', { title: 'All event', events: result });
    })
    .catch((err) => {
      console.error(err);
    });
}
// about page
const getAboutEvent = (req, res) => {
  res.render('about', { title: 'About Eventrix' });
}

// form page
const getFormEvent = (req, res) => {
  res.render('form', { title: 'Add a New Event' });
}


// form posting
const getFormPostEvent = (req, res) => {
  const event = new Event(req.body);
	event.save()
		.then((result) => {
			res.redirect('/');
		})
		.catch((err) => {
			console.error(err);
		});
}

// creating a delete feature
const deleteEvent = (req, res) => {
  const id = req.params.id;
	Event.findByIdAndDelete(id)
		.then((result) => {
			res.json({ redirect: '/' });
		})
		.catch((err) => {
			console.error(err);
			res.status(500).json({ error: 'Failed to delete event' });
    });

}

module.exports = {
  getAllEvent,
  getAboutEvent,
  getFormEvent,
  getFormPostEvent,
  deleteEvent

}


