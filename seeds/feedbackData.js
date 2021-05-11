const { Feedback } = require('../models/Feedback.js');

const feedbackData = [
{
    "feedback": "I really love this beer so much and I will be back again!",
    "post_id": 1,
},
{
    "feedback": "I really wish there was more seating",
    "post_id": 2,
},
]

const seedFeedback = () => Feedback.bulkCreate(feedbackData);

module.exports = seedFeedback;