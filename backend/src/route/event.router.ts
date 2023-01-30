import express from "express";
import { EventController } from "../controller/event.controller";

const eventRouter = express.Router();

eventRouter.route("/getAll").get((req, res) => {
  new EventController().getAll(req, res);
});

eventRouter.route("/insert").post((req, res) => {
  new EventController().insert(req, res);
});

eventRouter.route("/update").post((req, res) => {
  new EventController().update(req, res);
});

eventRouter.route("/remove").post((req, res) => {
  new EventController().remove(req, res);
});

eventRouter.route("/getPhoto").post((req, res) => {
  new EventController().getPhoto(req, res);
});

export default eventRouter;
