import React from "react";
import users from "@/data/db";
import fs from "node:fs";
import path from "node:path";

import connectToDB from "@/utils/db";
import usersModel from "@/models/user";

async function handler(req, res) {
  // console.log(req.method);
  // console.log(req.body);

  connectToDB();
  switch (req.method) {
    case "GET": {
      const users = await usersModel.find();
      res.json(users);
      break;
    }

    case "POST": {
      const { username, email, password } = req.body;

      if (username.length < 3 || !email.trim() || password.length < 8) {
        return res.status(422).json({ message: "Data is Not Valid" });
      }

      const user = await usersModel.create({ username, email, password });

      console.log(user);

      if (user) {
        return res.status(201).json({
          message: "User Registred successfully",
        });
      } else {
        return res.status(409).json({ message: "Unknown Error !!" });
      }
    }

    case "PUT": {
      return res.json({ message: "user replace successfully" });
    }

    default: {
      res.json({
        message: "welcome",
      });
    }
  }
}

export default handler;
