import db from '../../db';

const router = require('express').Router();
const { Feedback } = require('../../models');

router.post('/feedback', async(req, res) => {

  try {
    let newFeedback = {
      name: req.body.name,
      feedback: req.body.feedback,
      email: req.body.email,
      checkbox: req.body.checkbox
    }
    let feedback = await Feedback.create(newFeedback);
    
    console.log(feedback);

    res.status(200).json(feedback);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get('/admin/feedback', async (req, res) => {
  try {
    let feedback = await db.feedback.all();
    res.json(feedback);
  } catch(e) {
    console.log(e);
    res.sendStatus(500);
  }
})

module.exports = router;