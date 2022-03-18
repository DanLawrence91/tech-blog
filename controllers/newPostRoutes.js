const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    res.render("post", { logged_in: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
