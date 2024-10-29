const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    const { title, date, location, description } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
    const event = new Event({ title, date, location, description, imageUrl });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Error creating event' });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('attendees');
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching events' });
  }
};