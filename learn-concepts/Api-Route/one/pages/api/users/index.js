import React from "react";
import users from "@/data/db";
import fs from "node:fs";
import path from "node:path";

function handler(req, res) {
  console.log(req.method);
  console.log(req.body);

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

      users.push({ username, email, password });
      console.log(users);

      return res
        .status(201)
        .json({ message: "User Created Successfully", data: users });

      break;
    }

    case "PUT": {
      return res.json({ message: "user replace successfully" });
    }

    case "DELETE": {
      res.json({ message: "user Removed Successfully" });
    }

    default: {
      res.json({
        message: "welcome",
      });
    }
  }
}

export default handler;
