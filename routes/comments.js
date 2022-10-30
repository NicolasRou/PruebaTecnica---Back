const express = require("express");
const { getComment, createComment } = require("../controllers/comment")
const router = express.Router();

router.get("/character/:id/comments", getComment);

router.post("/character/:id/comments", createComment);

module.exports = router;