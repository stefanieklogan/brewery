const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
    } else {
        next();
    }
};

module.exports = withAuth;