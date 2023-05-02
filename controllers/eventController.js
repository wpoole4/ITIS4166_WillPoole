const model = require('../models/event');
const rsvp = require('../models/rsvp');
const user = require('../models/user');

exports.events = (req, res, next)=>{
    //res.send('send all stories');
    model.find()
    .then(events=> res.render('./event/events', {events}))
    .catch(err=>next(err))
};

exports.new = (req, res)=>{
    res.render('./event/newEvent');
};

exports.create = (req, res, next)=> {
    let event = new model(req.body);
    event.hostname = req.session.user;
    event.image = "/images/" + req.file.filename;
    event.save()
    .then(event=> res.redirect('/event/events'))
    .catch(err=>{
        if(err.name === 'ValidationError') {
            err.status = 400;
        }
        next(err);
    })
    
};

exports.show = (req, res, next)=> {
    let id = req.params.id;
    model.findById(id).populate('hostname', 'firstName lastName')
    .then(event=>{
    if(event) {
        let start = new Date(event.startdate);
        let formattedStart = start.toLocaleString();
        event.startdate = formattedStart;
        let end = new Date(event.enddate);
        let formattedEnd = end.toLocaleString();
        event.enddate = formattedEnd;
        res.render('./event/event', {event, rsvp});
} else {
     let err = new Error('Cannot find an event with id ' + id);
     err.status = 404;
     next(err);
        }
    })
    .catch(err=>next(err));
};


exports.edit = (req, res, next)=> {
    let id = req.params.id;
    model.findById(id)
    .then(event=>{
        res.render('./event/edit', {event});
})
    .catch(err=>next(err));
};

exports.update = (req, res, next)=> {
    let event = req.body;
    let id = req.params.id;

    model.findByIdAndUpdate(id, event, {useFindAndModify: false, runValidators: true})
    .then(event=>{
            event.image = "/images/" + req.file.filename;
            res.redirect('/event/'+id);
})
    .catch(err=> {
        if (err.name === 'ValidationError')
        err.status = 400;
        next(err);
    });
};

exports.delete = (req, res, next)=> {
    let id = req.params.id;

    model.findByIdAndDelete(id, {useFindAndModify: false})
    .then(event=> {
        res.redirect('/event/events');
    })
    .catch(err=>next(err));
};

exports.RSVP = (req, res, next)=> {
    let id = req.params.id;
    rsvp.findOneAndUpdate(rsvp._id, {upsert: true})
    .then(rsvp=>{
        res.redirect('/users/profile');
    })
};