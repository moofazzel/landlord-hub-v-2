// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectMongo from "@/database/conn";
import User from "@/model/user";

// export default function handler(req, res) {
//   connectMongo();
//   // res.status(200).json({ name: "John Doe" });
// }

// export default async function handler(req, res) {
//   connectMongo();
//   if (req.method === "GET") {
//     try {
//       const users = await User.find();
//       res.status(200).json(users);
//     } catch (error) {
//       res.status(500).json({ error: "Failed to fetch users" });
//     }
//   } else {
//     res.status(404).json({ error: "Invalid API endpoint" });
//   }
// }

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, age } = req.body;

    try {
      // Create a new User document
      const newUser = new User({
        name: "rony",
        age: 25,
      });

      // Save the new User document to the database
      const savedUser = await newUser.save();
      console.log("User saved:", savedUser);

      res.status(201).json(savedUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to create user" });
    }
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
};
