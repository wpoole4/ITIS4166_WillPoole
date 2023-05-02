const event = require('../models/event');
const {body} = require('express-validator');
const {validationResult} = require('express-validator');

exports.validateId = (req, res, next)=>{
    let id = req.params.id;
    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid event id');
        err.status = 400;
        return next(err);
    } else {
        return next();
    }
};

exports.validateSignUp = 
[body('firstName', 'First name cannot be empty').notEmpty().trim().escape(),
body('lastName', 'Last name cannot be empty').notEmpty().trim().escape(),
body('email', 'Email must be a valid email address ').isEmail().trim().escape().normalizeEmail(),
body('password', 'Password must be at least 8 characters and at most 64 characters').isLength({min: 8, max: 64})];

exports.validateLogIn = 
[body('email', 'Email must be a valid email address ').isEmail().trim().escape().normalizeEmail(),
body('password', 'Password must be at least 8 characters and at most 64 characters').isLength({min: 8, max: 64})];

exports.validateResult = (req, res, next) => {
    let errors = validationResult(req);
    if(!errors.isEmpty()) {
        errors.array().forEach(error=>{
            req.flash('error', error.msg);
        });
        return res.redirect('back');
    } else {
        return next();
    }
};

exports.validateEvent = 
[body('title', 'Title cannot be empty').notEmpty().trim().escape(),
body('details', 'Details must have a minimum length of 10 characters').isLength({min: 10}).trim().escape(),
body('category', 'Category must be one of the valid options').isIn(['Class', 'Q&A', 'Workout', 'Workshop', 'Other']),
body('startdate','Start Date must be a valid date and be after todays date').isISO8601().isAfter(),
body('enddate', 'End Date must be a valid date and come after the start date').isISO8601()];