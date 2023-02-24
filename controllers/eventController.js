const model = require('../models/event');

exports.events = (req, res)=>{
    //res.send('send all stories');
    let events = model.find();
    res.render('./event/events', {events});
};

exports.new = (req, res)=>{
    res.render('./event/newEvent');
};

exports.create = (req, res)=> {
    let event = req.body;
    model.save(event);
    res.redirect('/event/events');
};

exports.show = (req, res, next)=> {
    let id = req.params.id;
    let event = model.findById(id);
    if(event) {
    res.render('./event/event', {event});
} else {
    let err = new Error('Cannot find an event with id ' + id);
    err.status = 404;
    next(err);
}
};

exports.edit = (req, res, next)=> {
    let id = req.params.id;
    let event = model.findById(id);
    if (event){
        res.render('./event/edit', {event});
    } else {
        let err = new Error('Cannot find a story with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.update = (req, res, next)=> {
    let event = req.body;
    let id = req.params.id;

    if (model.updateById(id, event)) {
        res.redirect('/event/'+id);
    } else {
        let err = new Error('Cannot find a story with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.delete = (req, res, next)=> {
    let id = req.params.id;
     if (model.deleteById(id)){
        res.redirect('/event/events');
     } else {
        let err = new Error('Cannot find a story with id ' + id);
        err.status = 404;
        next(err);
     }
};