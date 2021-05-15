const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/feedback", feedbackRoutes);
router.use("/api", apiRoutes);

module.exports = router;