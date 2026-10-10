import connectToDB from "@/utils/db";
import coursesModel from "@/models/course";
import teachersModel from "@/models/teacher";
import courseValidator from "@/validators/course";

const handler = async (req, res) => {
  connectToDB();
  if (req.method === "POST") {
    const validationResult = courseValidator(req.body);

    console.log(validationResult);

    if (validationResult !== true) {
      return res.status(422).json(validationResult);
    }
    try {
      const { title, price, teacher } = req.body;

      if (!title.trim() || title.length < 4) {
        return res.status(422).json({ message: "title is not valid" });
      }
      const mainTeacher = await teachersModel.findOne({ _id: teacher });

      await coursesModel.create({
        title,
        price,
        teacher: mainTeacher,
      });

      return res.status(201).json({ message: "Course created Successfully" });
    } catch (err) {
      return res.status(500).json({ message: "server error 500" });
    }
  } else if (req.method === "GET") {
    console.log(req.query.q);
    if (req.query.q) {
      const { q } = req.query;
      const courses = await coursesModel.find({
        title: {
          $regex: q,
        },
      });
      res.json(courses);
    } else {
      const courses = await coursesModel
        .find({}, "-__v -updatedAt")
        .populate("teacher", "name");
      return res.json(courses);
    }
  }
};

export default handler;
