const router = require('express').Router();
const { Feedback } = require('../../models');
const withAuth = require('../../utils/auth')

router.post('/', async (req, res) => {

  try {
    let newFeedback = {
      name: req.body.name,
      feedback: req.body.feedback,
      email: req.body.email,
      checkbox: req.body.checkbox
    }
    let feedback = await Feedback.create(newFeedback);

    res.status(200).json(feedback);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get('/',withAuth, async (req, res) => {
  let postData = await Feedback.findAll({});

  const posts = postData.map(
    (post) => post.get({
      plain: true
    }));

    res.status(200).json(posts);
});
module.exports = router;