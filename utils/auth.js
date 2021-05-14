const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.render('login', {
            message: "Login required",
            title: "login"
        });
    } else {
        next();
    }
  };
  
  module.exports = withAuth;