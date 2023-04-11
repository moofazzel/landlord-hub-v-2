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

//post: http://localhost:3000/api/users

export async function createUser(req, res) {
  try {
    // const { name, email, password } = req.body;
    // const user = await User.create({ name, email, password });

    console.log(req.body);
    if (!user)
      return res.status(404).json({ error: "From Data Not Provided...!" });
    const user = req.body;
    User.create(user, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (err) {
    res.status(404).json({ error: "Error While Creating Data" });
  }
}
