import connectMongo from "@/database/conn";
import Property from "@/model/property";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error While Connecting to Database" })
  );
  // get properties by user email

  try {
    if (req.method === "GET") {
      const { properties } = req.query;

      const propertiesByUser = await Property.find({ email: properties });
      if (!propertiesByUser)
        return res.status(404).json({ error: "No Data Found" });
      res.status(200).json(propertiesByUser);
    }
  } catch (error) {
    res.status(404).json({ error: "Failed to get properties" });
  }
}
