import React from "react";
import users from "@/data/db";

function handler(req, res) {
  switch (req.method) {
    case "GET": {
      return res.json(users);
      break;
    }

    case "POST": {
      return res.json({ message: "user created successfully" });
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
