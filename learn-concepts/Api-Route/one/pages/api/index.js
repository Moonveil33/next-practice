const mongoose = require("mongoose");
const handler = (req, res) => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/next-db")
    .then(() => console.log("Connected To DB Successfully"))
    .catch((err) => console.log("error in db"));

  return res.json({ message: "Home Page" });
};

export default handler;
