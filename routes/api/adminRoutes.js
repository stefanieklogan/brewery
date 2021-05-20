const router = require('express').Router();
// const adminController = require("../../controllers/adminController");
const { Admin } = require('../../models');
// router.route("/login")
// 	.post(adminController.postLogin)
router.post('/signup', async (req, res) => {
    try {
        const userData = await Admin.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
            console.log(userData);
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await Admin.findOne({
            where: {
                email: req.body.email
            }
        });

        if (!userData) {
            res.status(400).json({
                message: 'Incorrect email, please try again'
            });
            return;
        }
        console.log(userData);

        // const validPassword = await userData.checkPassword(req.body.password);
        const validPassword = req.body.password === userData.password;

        if (!validPassword) {
            res.status(400).json({
                message: 'Incorrect password, please try again'
            });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({
                user: userData,
                message: 'You are now logged in!'
            });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

//logout route for admin
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
            console.log("Logout Successful")
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
