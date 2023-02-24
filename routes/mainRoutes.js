const express = require('express');
const controller = require('../controllers/mainController');
const router = express.Router();

//GET /index : send html form for the home page
router.get('/', controller.index);

//GET /about : send html form for the about page
router.get('/about', controller.about);

//GET /contact : get html form for the contact page
router.get('/contact', controller.contact);

module.exports = router;