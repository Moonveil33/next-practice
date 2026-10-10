const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    course: {
      type: mongoose.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
const model = mongoose.models.Comment || mongoose.model("Comment", schema);

export default model;
