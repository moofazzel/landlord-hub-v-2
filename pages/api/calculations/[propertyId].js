import connectMongo from "@/database/conn";
import Calculations from "@/model/calculations";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error While Connecting to Database" })
  );

  // get a single property
  //   localhost:3000/api/calculations=propertyId
  if (req.method === "GET") {
    try {
      const { propertyId } = req.query;
      const propertyCalc = await Calculations.find({ propertyId });
      if (!propertyCalc)
        return res.status(404).json({ error: "No Data Found" });
      res.status(200).json(propertyCalc);
    } catch (error) {
      res.status(404).json({ error: "Failed to get calculations data" });
    }
  }

  // update a property
  if (req.method === "PUT") {
    try {
      const { singleProperty } = req.query;
      const property = await Property.findById(singleProperty);
      if (!property) return res.status(404).json({ error: "No Data Found" });
      const propertyData = req.body;
      const updatedProperty = await Property.findByIdAndUpdate(
        singleProperty,
        propertyData,
        {
          new: true,
          runValidators: true,
        }
      );
      res.status(200).json(updatedProperty);
    } catch (error) {
      res.status(404).json({ error: "Failed to update property" });
    }
  }

  // delete a property
  if (req.method === "DELETE") {
    try {
      const { singleProperty } = req.query;
      const property = await Property.findById(singleProperty);
      if (!property) return res.status(404).json({ error: "No Data Found" });
      await Property.findByIdAndDelete(singleProperty);
      res.status(200).json({ massage: "Property Deleted Successfully" });
    } catch (error) {
      res.status(404).json({ error: "Failed to delete property" });
    }
  }
}
