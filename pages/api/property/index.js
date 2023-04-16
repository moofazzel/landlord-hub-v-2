import connectMongo from "@/database/conn";
import Property from "@/model/property";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error While Connecting to Database" })
  );
  try {
    // create a new property
    //post: http://localhost:3000/api/property
    if (req.method === "POST") {
      const propertyData = req.body;

      if (!propertyData)
        return res
          .status(404)
          .json({ error: "Property Data Not Provided...!" });

      const newProperty = new Property(propertyData);
      await newProperty.save();
      res.status(200).json({ massage: "Property Created Successfully" });
    }
  } catch (error) {
    return res.status(404).json({ error: "Failed to create property" });
  }

  // get all properties
  //get: http://localhost:3000/api/property

  try {
    if (req.method === "GET") {
      const properties = await Property.find({});

      if (!properties) return res.status(404).json({ error: "No Data Found" });

      res.status(200).json(properties);
    }
  } catch (error) {
    return res.status(404).json({ error: "Failed to get properties" });
  }
}
