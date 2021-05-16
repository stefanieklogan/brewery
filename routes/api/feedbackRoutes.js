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

module.exports = router;