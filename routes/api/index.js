const router = require("express").Router();
const untappdRoutes = require("./untappdRoutes");

router.use("/", untappdRoutes);

module.exports = router;