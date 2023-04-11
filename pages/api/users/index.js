import connectMongo from "@/database/conn";
import { createUser, getUsers } from "@/database/controller";

export default async function handler(req, res) {
  connectMongo();

  // type of request
  const { method } = req;

  switch (method) {
    case "GET":
      // res.status(200).json(await getUsers(req, res));
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
