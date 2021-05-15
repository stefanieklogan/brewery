const router = require('express').Router();

//login route for 
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login', {
        title: "Login"
    });

});

//logout route for admin
router.get('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).redirect('/');
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
