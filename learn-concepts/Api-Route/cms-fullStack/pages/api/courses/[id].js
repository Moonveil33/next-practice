import connectToDB from "@/utils/db";
import coursesModel from "@/models/course";
import { isValidObjectId } from "mongoose";

const handler = async (req, res) => {
  connectToDB();

  if (req.method === "DELETE") {
    const { id } = req.query;

    if (isValidObjectId(id)) {
      try {
        await coursesModel.findOneAndDelete({ _id: id });
        return res.json({ message: "Course Removed Successfully" });
      } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
      }
    } else {
      return res.status(422).json({ message: "Object id is not valid" });
    }
  } else if (req.method === "PUT") {
    const { id } = req.query;
    const { title } = req.body;
    if (isValidObjectId(id)) {
      try {
        await coursesModel.findOneAndUpdate(
          { _id: id },
          {
            title,
          },
        );
        return res.status(200).json({ message: "Course Updated Successfully" });
      } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
      }
    } else {
      return res.status(422).json({ message: "Course ID is not Valid !!" });
    }
  }
};

export default handler;
