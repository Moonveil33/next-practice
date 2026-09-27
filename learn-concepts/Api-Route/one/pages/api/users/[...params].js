function handler(req, res) {
  console.log(req.query);
  const { params } = req.query;

  res.status(200).json({ message: "this response is for slug api" });
}

export default handler;
