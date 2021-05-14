const router = require("express").Router();
const feedbackRoutes = require("./feedbackRoutes");
// const untappdRoutes = require("./untappdRoutes");

router.use("/feedback", feedbackRoutes);
// router.use("/", untappdRoutes);

module.exports = router;