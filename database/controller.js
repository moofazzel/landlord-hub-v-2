// Controller

import User from "@/model/user";

//get: http://localhost:3000/api/users
export async function getUsers(req, res) {
  try {
    const users = await User.find({});
    if (!users) return res.status(404).json({ error: "No Data Found" });
    res.status(200).json({ users });
  } catch (err) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}

// Save a new user
//post: http://localhost:3000/api/users
export async function createUser(req, res) {
  try {
    const formData = req.body;

    if (!formData)
      return res.status(404).json({ error: "From Data Not Provided...!" });

    const existUser = await User.findOne({ email: formData.email });

    if (existUser)
      return res.status(404).json({ error: "User Already Exist...!" });

    const newUser = new User(formData);
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    return res.status(404).json({ error: "Failed to create user" });
  }
}
