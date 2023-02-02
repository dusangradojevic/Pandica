import express from "express";
import { CommentController } from "../controller/comment.controller";

const commentRouter = express.Router();

commentRouter.route("/getAllByEventId").post((req, res) => {
  new CommentController().getAllByEventId(req, res);
});

commentRouter.route("/insert").post((req, res) => {
  new CommentController().insert(req, res);
});

export default commentRouter;
