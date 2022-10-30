const db = require("../db/index");

const getComment = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const comment = await db.query(`select * from comments where character_id = ${id}`);

    return res.status(200).json({ data: comment.rows, comments: comment.rowCount });
  } catch (error) {
    return next(error);
  }
};

const createComment = async (req, res, next) => {
  try {
    const { character_id, name, name_user, comment_ } = req.body;

    const newComment = {
      character_id,
      name,
      name_user,
      comment_,
    };

    await db.query(
      "Insert into comments(character_id, name, name_user, comment_) values ($1, $2, $3, $4)",
      [
        newComment.character_id,
        newComment.name,
        newComment.name_user,
        newComment.comment_,
      ]
    );

    return res.send({
      commentNew: newComment,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { getComment, createComment };
