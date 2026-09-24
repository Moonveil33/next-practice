import users from "@/data/db";

const handler = (req, res) => {
  if (req.method === "GET") {
    const { id } = req.query;
    const user = users.find((user) => user.id === +id);

    if (user) {
      return res.json(user);
    } else {
      return res.json({ message: "not found" });
    }
  }
};

export default handler;
