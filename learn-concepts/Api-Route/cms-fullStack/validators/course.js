const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
  title: { type: "string", min: 4, max: 100 },
  price: { type: "number", positive: true, min: 0, max: 6_000_000 },
};

// v.compile returns Function
const check = v.compile(schema);

export default check;
