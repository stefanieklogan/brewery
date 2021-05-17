const { Feedback } = require('../models');

// Defining methods for the booksController
module.exports = {
	getFeedback: function (req, res) {
		Feedback
			.findAll()
			.then(data => res.json(data))
			.catch((err) => {
				res.json(err);
			})
	}
};