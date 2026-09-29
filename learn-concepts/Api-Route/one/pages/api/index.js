require("./../../utils/db");
import connectToDB from "./../../utils/db";

const handler = (req, res) => {
  connectToDB();
  return res.json({ message: "Home Page" });
};

export default handler;
