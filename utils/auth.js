const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
       alert("you must be logged in to see this page")
    } else {
        next();
    }
};

module.exports = withAuth;