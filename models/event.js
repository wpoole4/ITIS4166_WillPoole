const { DateTime } = require('luxon');
const { v4: uuidv4} = require('uuid');
const multer  = require('multer')
const upload = multer({ dest: 'public/images/' })

const events = [
{
    id: '1',
    category: 'Class',
    title: 'Voice Acting 101 - Fundamentals of Voice Acting',
     location: 'Zoom',
     hostname: 'Will Poole ft. Mark New',
     startdate: DateTime.fromISO('2023-05-22T20:30:00').toLocaleString(DateTime.DATETIME_MED),
    enddate: DateTime.fromISO('2023-05-22T23:30:00').toLocaleString(DateTime.DATETIME_MED),
    details: 'Learn the fundamentals of voice acting. The industry, techniques for beginners, auditions, and more!',

},
{
    id: '2',
    category: 'Class',
    title: 'Commercial Voiceover 101 - Intro to  Commercial Acting',
    location: 'Zoom',
    hostname: 'Will Poole ft. Daniel Slant',
    startdate: DateTime.fromISO('2023-05-13T20:30:00').toLocaleString(DateTime.DATETIME_MED),
    enddate: DateTime.fromISO('2023-05-13T23:30:00').toLocaleString(DateTime.DATETIME_MED),
    details: 'Learn about commercial voice over and how to approach a commercial script!'

},
{
    id: '3',
    category: 'Class',
    title: 'Voice Acting 201 - Intermediate Voice Acting',
    location: 'Zoom',
    hostname: 'Will Poole ft. Mark Dunley',
    startdate: DateTime.fromISO('2023-05-28T20:30:00').toLocaleString(DateTime.DATETIME_MED),
    enddate: DateTime.fromISO('2023-05-28T23:30:00').toLocaleString(DateTime.DATETIME_MED),
    details: 'Take voice acting to a new level. Feedback is harsher, techniques more advanced, and topics more in-depth. Only take this if you have taken the first class.'
},
{
    id: '4',
    category: 'Q&A',
    title: 'Remote Voice-over Q&A - Hosted by Will Poole ft. John New',
    location: 'Zoom',
    hostname: 'Will Poole ft. John New',
    startdate: DateTime.fromISO('2023-06-03T20:30:00').toLocaleString(DateTime.DATETIME_MED),
    enddate: DateTime.fromISO('2023-06-03T23:30:00').toLocaleString(DateTime.DATETIME_MED),
    details: 'During this Q&A session, ask any questions about remote recording in VO! Ask questions about home studios, remote opportunities, and more!'
},
{
    id: '5',
    category: 'Q&A',
    title: 'Voiceover Industry Q&A - Hosted by Will Poole ft. Mark Dunley',
    location: 'Zoom',
    hostname: 'Will Poole ft. Mark Dunley',
    startdate: DateTime.fromISO('2023-04-20T20:30:00').toLocaleString(DateTime.DATETIME_MED),
    enddate: DateTime.fromISO('2023-04-20T23:30:00').toLocaleString(DateTime.DATETIME_MED),
    details: 'During this Q&A session, ask any questions about the voiceover industry. This includes questions about your cover letter/resume, questions about agencies, and more!'
},
{
    id: '6',
    category: 'Q&A',
    title: 'Voiceover Expenses (Taxes/Equipment) - Hosted by Will Poole ft. Kylie Ariel',
    location: 'Zoom',
    hostname: 'Will Poole ft. Kylie Ariel',
    startdate: DateTime.fromISO('2023-06-14T20:30:00').toLocaleString(DateTime.DATETIME_MED),
    enddate: DateTime.fromISO('2023-06-14T23:30:00').toLocaleString(DateTime.DATETIME_MED),
    details: 'During this Q&A session, ask any questions about how to budget when getting into VO! This includes questions about tax forms, equipment expenses, and more!'
},
{
    id: '7',
    category: 'Workout',
    title: 'Character Acting Workout - Hosted by Will Poole',
    location: 'Discord',
    hostname: 'Will Poole',
    startdate: DateTime.fromISO('2023-07-14T20:30:00').toLocaleString(DateTime.DATETIME_MED),
    enddate: DateTime.fromISO('2023-07-14T23:30:00').toLocaleString(DateTime.DATETIME_MED),
    details: 'Workout your character voices here!'
},
{
    id: '8',
    category: 'Workshop',
    title: 'Voiceover Workshop - Commercial Acting',
    location: 'Zoom',
    hostname: 'Will Poole ft. Kylie Ariel',
    startdate: DateTime.fromISO('2023-09-30T20:30:00').toLocaleString(DateTime.DATETIME_MED),
    enddate: DateTime.fromISO('2023-09-30T23:30:00').toLocaleString(DateTime.DATETIME_MED),
    details: 'Bring your own commercial scripts and auditions for practice!'
},
{
    id: '9',
    category: 'Workshop',
    title: 'Voiceover Workshop - Audiobooks',
    location: 'Zoom',
    hostname: 'Will Poole',
    startdate: DateTime.fromISO('2023-07-14T20:30:00').toLocaleString(DateTime.DATETIME_MED),
    enddate: DateTime.fromISO('2023-07-14T23:30:00').toLocaleString(DateTime.DATETIME_MED),
    details: 'Bring your own material and lets practice audio book reads!'
},
{
    id: '10',
    category: 'Other',
    title: 'Hangout w/ Voice Actors',
    location: 'Discord',
    hostname: 'Will Poole',
    startdate: DateTime.fromISO('2023-10-24T20:30:00').toLocaleString(DateTime.DATETIME_MED),
    enddate: DateTime.fromISO('2023-10-24T23:30:00').toLocaleString(DateTime.DATETIME_MED),
    details: 'Lets talk with one another and hang out!'
},
{
    id: '11',
    category: 'Other',
    title: 'Improv, Improv, and more Improv!',
    location: 'Zoom',
    hostname: 'Will Poole ft. John New',
    startdate: DateTime.fromISO('2023-11-02T20:30:00').toLocaleString(DateTime.DATETIME_MED),
    enddate: DateTime.fromISO('2023-11-02T23:30:00').toLocaleString(DateTime.DATETIME_MED),
    details: 'During this session, we will just be playing improv games and working on improv in general'
},
{
    id: '12',
    category: 'Other',
    title: 'Hangout w/ Voice Actors - 2nd Meeting',
    location: 'Discord',
    hostname: 'Will Poole',
    startdate: DateTime.fromISO('2023-06-14T20:30:00').toLocaleString(DateTime.DATETIME_MED),
    enddate: DateTime.fromISO('2023-06-14T23:30:00').toLocaleString(DateTime.DATETIME_MED),
    details: 'Lets chat some more!'
}
];

exports.find = () => events;

exports.findById = id => events.find(event=>event.id === id);

exports.save = function (event) {
    event.id = uuidv4();
    event.startdate = DateTime.fromISO(event.startdate).toLocaleString(DateTime.DATETIME_MED);
    event.enddate = DateTime.fromISO(event.enddate).toLocaleString(DateTime.DATETIME_MED);
    events.push(event);

};

exports.updateById = function(id, newEvent){
    let event = events.find(event=>event.id === id);
    if (event) {
        event.category = newEvent.category;
        event.title = newEvent.title;
        event.hostname = newEvent.hostname;
        newEvent.startdate = DateTime.fromISO(newEvent.startdate).toLocaleString(DateTime.DATETIME_MED);
        event.startdate = newEvent.startdate;
        newEvent.enddate = DateTime.fromISO(newEvent.enddate).toLocaleString(DateTime.DATETIME_MED);
        event.enddate = newEvent.enddate;
        event.details = newEvent.details;
        event.image = newEvent.image
        return true;
    } else {
        return false;
    }
}

exports.deleteById = function(id) {
    let index = events.findIndex(event =>event.id === id);
    if (index !== -1){
        events.splice(index, 1);
        return true;
    } else {
        return false;
    }
}