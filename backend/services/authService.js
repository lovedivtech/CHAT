import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const randomUsername = (fullName) => {
  const name = fullName.toLowerCase().split(" ");
  const first = name[0];
  const randomNum = Math.floor(Math.random() * 10000); // 0-9999

  let second = name[1] || ""; // handles single-name case

  return `${first}${second}${randomNum}`;
};

export const comparePassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
};
