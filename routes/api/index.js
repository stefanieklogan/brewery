const router = require("express").Router();
const feedbackRoutes = require("./feedbackRoutes");
const untappdRoutes = require("./untappdRoutes");

router.use("/feedback", feedbackRoutes);
router.use("/untappd", untappdRoutes);


module.exports = router;