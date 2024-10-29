const express = require('express');
const eventController = require('../controllers/eventController');
const upload = require('../middleware/uploadMiddleware');
const router = express.Router();

router.post('/events', upload.single('image'), eventController.createEvent);
router.get('/events', eventController.getEvents);

module.exports = router;
