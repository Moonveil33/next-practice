import React from "react";

// Fake Database

const users = [
  {
    username: "erfan._b7",
    email: "root.alireza.shadow@gmail.com",
    password: "oopYujin123",
  },
];

function handler(req, res) {
  switch (req.method) {
    case "GET": {
      return res.json({ message: "Welcome To index Page" });
      break;
    }

    case "POST": {
      //   console.log(req.body);

      const { username, email, password } = req.body;
      users.push({ username, email, password });

      return res.json({ message: "user created successfully", data: users });
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
