const express = require('express');
const controller = require('../controllers/eventController');
const router = express.Router();

//GET /events: send all events to user
router.get('/events', controller.events);

//GET /events/newEvent: send html form for creating a new event
router.get('/newEvent', controller.new);

//POST /events: create a new event
router.post('/events', controller.create);

//GET /events/:id: send details of event identified by id
router.get('/:id', controller.show);

//GET /events/:id/edit: send html form for editing an existing story
router.get('/:id/edit', controller.edit);

//PUT /events/:id update the event identified by id
router.put('/:id', controller.update);

//DELETE /events/:id, delete the event identified by id
router.delete('/:id', controller.delete);

module.exports = router;