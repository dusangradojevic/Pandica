import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import expressValidator from "express-validator";
import mongoose from "mongoose";
import multer from "multer";
import userRouter from "./route/user.routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(expressValidator());

mongoose.connect("mongodb://localhost:27017/zoo_pandica");

const connection = mongoose.connection;
const port = 4000;

connection.once("open", () => {
  console.log("Connection successful");
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
app.use(upload.single("photo"));

const router = express.Router();
router.use("/user", userRouter);


app.use("/", router);

app.listen(port, () => console.log(`Express server running on port ` + port));
