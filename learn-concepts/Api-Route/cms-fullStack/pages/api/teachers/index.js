import connectToDB from "@/utils/db";
import teachersModel from "@/models/teacher";

const handler = async (req, res) => {
  connectToDB();
  if (req.method === "POST") {
    try {
      const { name } = req.body;

      if (!name.trim() || name.length < 4) {
        return res.status(422).json({ message: "name is not valid" });
      }

      await teachersModel.create({
        name,
      });

      return res.status(201).json({ message: "Teacher created Successfully" });
    } catch (err) {
      return res.status(500).json({ message: "server error 500" });
    }
  } else if (req.method === "GET") {
    const teachers = await teachersModel.find({});
    return res.json(teachers);
  }
};

export default handler;
