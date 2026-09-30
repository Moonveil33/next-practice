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

    const updatedUser = await usersModel.findOneAndUpdate(
      { _id: id },
      {
        username,
        email,
        password,
      },
    );

    if (updatedUser) {
      return res.json({ message: "User Updated Successfully" });
    }
  }
};

export default handler;
