import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware.js";
import { CreateUserSchema } from "@repo/common/types";

const app = express();

const SECRET =
  //@ts-ignore

  app.post("/signup", (req, res) => {
    const data = CreateUserSchema.safeParse(req.body);
    if (!data.success) {
      res.json({
        Message: "entered data doesn't have correct format ",
      });
      return;
    }

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
