import connectToDB from "@/utils/db";
import commentsModel from "@/models/comment";

const handler = async (req, res) => {
  connectToDB();
  if (req.method === "POST") {
    try {
      const { body, course } = req.body;
      console.log(body, course);

      if (!body.trim()) {
        return res.status(422).json({
          message: "Body is not valid",
        });
      }

      await commentsModel.create({
        body,
        course,
      });

      return res.status(201).json({ message: "Comment created Successfully" });
    } catch (err) {
      return res.status(500).json({ message: "server error 500" });
    }
  } else if (req.method === "GET") {
    console.log("get");

    const comments = await commentsModel.find({}).populate("course");
    return res.json(comments);
  }
};

export default handler;
