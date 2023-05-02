const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rsvpSchema = new Schema({
    status: {type: String, required: [true, 'RSVP status is required'], enum: ['Yes', 'No', 'Maybe'] },
    event: {type: Schema.Types.ObjectId, required: [true, 'Event is required'], ref:'Event'},
    hostname: {type: Schema.Types.ObjectId, required: [true, 'Hostname is required'], ref:'User'}
}
);

module.exports = mongoose.model('RSVP', rsvpSchema);