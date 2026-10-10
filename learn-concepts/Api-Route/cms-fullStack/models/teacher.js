const mongoose = require("mongoose");

export const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const model = mongoose.models.Teacher || mongoose.model("Teacher", schema);

export default model;
