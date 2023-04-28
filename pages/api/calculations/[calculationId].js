import connectMongo from "@/database/conn";
import Calculations from "@/model/calculations";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error While Connecting to Database" })
  );

  // get a single property calculations
  //   localhost:3000/api/calculations=propertyId
  if (req.method === "GET") {
    try {
      //  Here calculationId is propertyId

      const { calculationId } = req.query;
      const propertyCalc = await Calculations.find({
        propertyId: calculationId,
      });
      console.log(calculationId);
      if (!propertyCalc)
        return res.status(404).json({ error: "No Data Found" });
      res.status(200).json(propertyCalc);
    } catch (error) {
      res.status(404).json({ error: "Failed to get calculations data" });
    }
  }

  // update a property calculation
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
      const { calculationId } = req.query;
      const propertyCalculation = await Calculations.findById(calculationId);
      if (!propertyCalculation)
        return res.status(404).json({ error: "No Data Found" });
      await Calculations.findByIdAndDelete(calculationId);
      res.status(200).json({ massage: "Property Data Deleted Successfully" });
    } catch (error) {
      res.status(404).json({ error: "Failed to delete property Data" });
    }
  }
}
