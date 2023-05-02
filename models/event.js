const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    category: {type: String, required: [true, 'category is required'], enum: ['Class', 'Q&A', "Workout", "Workshop", "Other"] },
    title: {type: String, required: [true, 'title is required'] },
    location: {type: String, required: [true, 'location is required'] },
    hostname: {type: Schema.Types.ObjectId, ref:'User'},
    startdate: {type: String, required: [true, 'startdate is required']},
    enddate: {type: String, required: [true, 'enddate is required']},
    details: {type: String, required: [true, 'details is required'] },
    image: {type: String, required: [true, 'image is required']}
},
{timestamps: true}
);

//collection name is stories in the database
module.exports = mongoose.model('Event', eventSchema);