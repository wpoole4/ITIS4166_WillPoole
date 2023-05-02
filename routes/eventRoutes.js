const express = require('express');
const controller = require('../controllers/eventController');
const router = express.Router();
const {fileUpload} = require('../middleware/fileUpload');
const {isLoggedIn, isHost} = require('../middleware/auth');
const {validateId} = require('../middleware/validator');
const{validateEvent} = require('../middleware/validator');

//GET /events: send all events to user
router.get('/events', controller.events);

//GET /events/newEvent: send html form for creating a new event
router.get('/newEvent', isLoggedIn, controller.new);

//POST /events: create a new event
router.post('/events', fileUpload, isLoggedIn, validateEvent, controller.create);

//GET /events/:id: send details of event identified by id
router.get('/:id', validateId, controller.show);

//GET /events/:id/edit: send html form for editing an existing story
router.get('/:id/edit', isLoggedIn, validateId, isHost, controller.edit);

//PUT /events/:id update the event identified by id
router.put('/:id', fileUpload, isLoggedIn, validateId, isHost, validateEvent, controller.update);

//DELETE /events/:id, delete the event identified by id
router.delete('/:id', isLoggedIn, validateId, isHost, controller.delete);

//RSVP REQUEST /events/id/rsvp, update RSVP status for a user

router.post('/:id/rsvp', isLoggedIn, controller.RSVP);

module.exports = router;