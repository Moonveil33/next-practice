const mongoose = require("mongoose");
const teachersModel = require("./teacher");
const { schema: teacherSchema } = require("./teacher");
const commentsModel = require("./comment");
const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 20,
      index: true,
      unique: true,
      // match
      // lowercase: true,
      // uppercase: true
    },
    price: {
      type: Number,
      required: false,
      default: 0,
      min: 0,
      max: 10000000,
    },
    // teacher: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "Teacher",
    //   required: true,
    // },
    teacher: {
      type: teacherSchema,
      required: true,
    },
  },
  { timestamps: true },
);

schema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "course",
});

const model = mongoose.models.Course || mongoose.model("Course", schema);

export default model;
