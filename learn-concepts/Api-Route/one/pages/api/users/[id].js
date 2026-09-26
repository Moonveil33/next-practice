import users from "@/data/db";
import path from "path";
import fs from "node:fs";

const handler = (req, res) => {
  if (req.method === "GET") {
    const { id } = req.query;
    const user = users.find((user) => user.id === +id);

    if (user) {
      return res.json(user);
    } else {
      return res.json({ message: "not found" });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;

    const dbPath = path.join(process.cwd(), "data", "db.json");

    const data = fs.readFileSync(dbPath);

    const parsedData = JSON.parse(data);

    const isUser = parsedData.users.some(
      (user) => String(user.id) === String(id),
    );

    if (isUser) {
      const filterredUsers = parsedData.users.filter(
        (user) => String(user.id) !== String(id),
      );

      const err = fs.writeFileSync(
        dbPath,
        JSON.stringify({ ...parsedData, users: filterredUsers }),
      );

      if (err) {
        // return res.json()
      } else {
        return res.json({ message: "user removed Successfully" });
      }
    } else {
      return res.status(404).json({ message: "user not found" });
    }
  }
};

export default handler;
