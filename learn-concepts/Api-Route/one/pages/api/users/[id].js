import users from "@/data/db";
import path from "path";
import fs from "node:fs";
import usersModel from "@/models/user";
import connectToDB from "@/utils/db";

const handler = async (req, res) => {
  connectToDB();

  if (req.method === "GET") {
    const { id } = req.query;
    // const user = await usersModel.find({_id: id})
    const user = await usersModel.findOne({ _id: id });

    if (user) {
      return res.json(user);
    } else {
      return res.json({ message: "not found" });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;

    const deletedUser = await usersModel.findOneAndDelete({ _id: id });
    if (deletedUser) {
      return res.status(200).json({ message: "user removed Successfully" });
    }
  } else if (req.method === "PUT") {
    const { id } = req.query;
    const { username, email, password } = req.body;

    const dbPath = path.join(process.cwd(), "data", "db.json");
    const data = fs.readFileSync(dbPath);
    const parsedData = JSON.parse(data);
    const isUser = parsedData.users.some(
      (user) => String(user.id) === String(id),
    );

    if (isUser) {
      parsedData.users.some((user) => {
        if (String(user.id) === String(id)) {
          user.username = username;
          user.email = email;
          user.password = password;
          return true;
        }
      });

      const err = fs.writeFileSync(dbPath, JSON.stringify(parsedData));

      if (err) {
        // Coding
      } else {
        return res.json({ message: "User Updated Successfully" });
      }
    } else {
      return res.status(404).json({ message: "user not found" });
    }
  }
};

export default handler;
