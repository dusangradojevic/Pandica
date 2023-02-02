import * as express from "express";
import Comment from "../model/comment";

export class CommentController {
  getAllByEventId = (req: express.Request, res: express.Response) => {
    const animalId = req.body.animalId;
    Comment.find({ animalId: animalId }, (err: any, comments: any) => {
      if (err) {
        res.json({ message: "Error", errorMessage: "Animals do not exist." });
      } else {
        res.json({ message: "Ok", comments: comments });
      }
    }).sort({ id: -1 });
  };

  insert = async (req: express.Request, res: express.Response) => {
    const userId = req.body.userId;
    const animalId = req.body.animalId;
    const text = req.body.text;

    const comments = await Comment.find().sort({ id: -1 }).limit(1);
    let newCommentId = 0;
    if (comments.length > 0) {
      newCommentId = comments[0].id + 1;
    }

    const newComment = new Comment({
      id: newCommentId,
      userId: userId,
      animalId: animalId,
      text: text,
    });

    newComment
      .save()
      .then(() => {
        res.status(200).json({ message: "Ok" });
      })
      .catch(() => {
        res.json({ message: "Error" });
      });
  };
}
