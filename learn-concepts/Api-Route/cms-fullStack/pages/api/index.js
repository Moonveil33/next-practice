const handler = (req, res) => {
  switch (req.method) {
    case "GET": {
      return res.status(200).json({ message: "welcome to cms home page" });
    }
  }
};

export default handler;
