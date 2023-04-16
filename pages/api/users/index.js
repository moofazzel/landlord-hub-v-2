import connectMongo from "@/database/conn";
import { createUser, getUsers } from "@/database/controller";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error While Connecting to Database" })
  );

  // type of request
  const { method } = req;

  switch (method) {
    case "GET":
      getUsers(req, res);
      break;

    case "POST":
      createUser(req, res);
      break;

    case "PUT":
      res.status(200).json({ name: "get request" });
      break;

    case "DELETE":
      res.status(200).json({ name: "get request" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
