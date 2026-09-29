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
      const dbPath = path.join(process.cwd(), "data", "db.json");

      const data = fs.readFileSync(dbPath);

      const parsedData = JSON.parse(data);

      return res.json(parsedData.users);
      break;
    }

    case "POST": {
      const { username, email, password } = req.body;

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
