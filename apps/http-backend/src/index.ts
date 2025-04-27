import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import JSXStyle from "styled-jsx/style";
import { middleware } from "./middleware";

const app = express();

const SECRET =
  //@ts-ignore
  app.post("/signup", (req, res) => {
    res.send("signup end point ");
  });
//@ts-ignore
app.post("/signin", (req, res) => {
  const userId = 1;
  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.json({
    token,
  });
});

app.post("/room", middleware, (req, res) => {});

app.listen(3000, () => {
  console.log("hello there ");
});
