import fs from "node:fs";
import path from "node:path";

function handler(req, res) {
  switch (req.method) {
    case "POST": {
      const { username, email, password } = req.body;

      if (!username.trim() || !email.trim() || !password.trim()) {
        return res.status(422).json({
          message: "Data is Not Valid",
        });
      }

      const dbPath = path.join(process.cwd(), "data", "db.json");

      const data = fs.readFileSync(dbPath);

      const parsedData = JSON.parse(data);

      parsedData.users.push({
        id: crypto.randomUUID(),
        username,
        email,
        password,
      });

      const err = fs.writeFileSync(dbPath, JSON.stringify(parsedData));

      if (err) {
        return res.status(400).json({ message: "Error Occurd" });
        break;
      } else {
        return res.status(201).json({ message: "user created Successfully" });
        break;
      }
    }
    default: {
      res.json({
        message: "welcome",
      });
    }
  }
}

export default handler;
