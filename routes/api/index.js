const router = require("express").Router();
const feedbackRoutes = require("./feedbackRoutes");
const untappdRoutes = require("./untappdRoutes");
const adminRoutes = require("./adminRoutes");
const signupRoutes = require("./singupRoutes");

router.use("/feedback", feedbackRoutes);
// router.user('/admin/feedbackresults, adminFeedback');
router.use("/untappd", untappdRoutes);
router.use("/admin", adminRoutes);
router.use("/signup", signupRoutes);


module.exports = router;