// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectMongo from "@/database/conn";
import User from "@/model/user";

// export default function handler(req, res) {
//   connectMongo();
//   // res.status(200).json({ name: "John Doe" });
// }

export default async function handler(req, res) {
  connectMongo();
  if (req.method === "GET") {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch users" });
    }
  } else {
    res.status(404).json({ error: "Invalid API endpoint" });
  }
}
