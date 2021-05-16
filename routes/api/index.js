const router = require("express").Router();
const feedbackRoutes = require("./feedbackRoutes");
const untappdRoutes = require("./untappdRoutes");
const userRoutes = require("./userRoutes");

router.use("/feedback", feedbackRoutes);
router.use("/untappd", untappdRoutes);
router.use("/user", userRoutes);


module.exports = router;