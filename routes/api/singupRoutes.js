const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {

	try {
		let newUser = {
			email: req.body.email,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
		}
		let user = await User.create(newUser);

		console.log(user);

		res.status(200).json(user);
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

// const router = require('express').Router();
// const signupController = require("../../controllers/signupControllers");

// router.route("/")
// 	.post(signupController.postSignup)

// module.exports = router;
module.exports = router;