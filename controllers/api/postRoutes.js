const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// can post a new post
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a current post with new content
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatePost = await Post.update(
      { title: req.body.title, content: req.body.content },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json(updatePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a current post
router.delete("/:id", async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
