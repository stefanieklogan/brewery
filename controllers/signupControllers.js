// const { User } = require('../models');

// // Defining methods for the booksController
// module.exports = {
// 	postSignup: async function (req, res) {
// 			try {
// 				let newUser = {
// 					email: req.body.email,
// 					firstName: req.body.firstName,
// 					lastName: req.body.lastName,
// 				}
// 				let user = await User.create(newUser);

// 				console.log(user);

// 				res.status(200).json(user);
// 			} catch (err) {
// 				console.log(err);
// 				res.status(500).send(err);
// 			}
// 		}
// 	};
