import connectToDB from "@/utils/db";
import coursesModel from "@/models/course";

const handler = async (req, res) => {
  connectToDB();
  if (req.method === "POST") {
    try {
      const { title } = req.body;

      if (!title.trim() || title.length < 5) {
        return res.status(422).json({ message: "title is not valid" });
      }

      const course = await coursesModel.create({
        title,
      });

      return res.status(201).json({ message: "Course created Successfully" });
    } catch (err) {
      return res.status(500).json({ message: "server error 500" });
    }
  }
};

export default handler;
