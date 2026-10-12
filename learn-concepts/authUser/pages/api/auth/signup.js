import userModel from "@/models/User";
import connectToDB from "@/configs/db";
import { hashPassword, generateToken } from "@/utils/auth";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return false;
  }

  try {
    connectToDB();
    const { firstname, lastname, username, email, password } = req.body;

    // Validation
    if (
      !firstname.trim() ||
      !lastname.trim() ||
      !username.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      return res.status(422).json({ message: "Data is not Valid" });
    }

    // isUserExist

    const isUserExist = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (isUserExist) {
      return res
        .status(422)
        .json({ message: "This username or email exist already" });
    }

    // HashPassword
    const hashedPassword = await hashPassword(password);

    // Generate Token
    const token = generateToken({ email });
    // Create

    await userModel.create({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
      role: "USER",
    });

    return res
      .status(201)
      .json({ message: "User Created Successfully :))" }, token);
  } catch (err) {
    return res.status(500).json({ message: "Unknown Internal Server Error" });
  }
};

export default handler;
