const router = require("express").Router();
const { User, Post } = require("../models");
const withAuth = require("../utils/auth");

// takes user to post found using primary key
router.get("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const post = postData.get({ plain: true });
    res.render("update", {
      ...post,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
