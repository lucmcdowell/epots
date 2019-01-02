const db = require('../db/meetup');

const meetupCreate = (req, res) => {
    const newMeetup = {
      id: db.length + 1,
      createdOn: Date.now(),
      topic: req.body.topic,
      location: req.body.location,
      happeningOn: req.body.happeningOn,
      images: req.body.images || null,
      tags: req.body.tags || null,
    };
    if (newMeetup.topic && newMeetup.location && newMeetup.happeningOn) {
      db.push(newMeetup);
      return res.status(201).send({
        status: 201,
        data: newMeetup,
      });
    }
    return res.status(400).send({ error: 'Unable to create a meetup' });
  };
  
  
  module.exports = { meetupCreate };