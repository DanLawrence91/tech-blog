const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll(
      { where: { id: req.params.id } },
      {
        include: [
          {
            model: User,
          },
          [
            {
              model: Comment,
              include: [{ model: User }],
            },
          ],
        ],
      }
    );

    const post = postData.get({ plain: true });

    res.render("post", {
      ...post,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/add", withAuth, async (req, res) => {
  // form to add new post
});

module.exports = router;
