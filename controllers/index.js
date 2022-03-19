const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const dashboardRoutes = require("./dashboardRoutes");
const newPostRoutes = require("./newPostRoutes");
const updatePostRoutes = require("./updatePostRoutes");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/post", newPostRoutes);
router.use("/update", updatePostRoutes);
router.use("/api", apiRoutes);

module.exports = router;
