import connectMongo from "@/database/conn";
import Calculations from "@/model/calculations";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error While Connecting to Database" })
  );
  try {
    // create a new calculation
    //post: http://localhost:3000/api/calculation
    if (req.method === "POST") {
      const calculationData = req.body;
      // console.log(calculationData);

      if (!calculationData)
        return res
          .status(404)
          .json({ error: "Calculation Data Not Provided...!" });

      const newCalculation = new Calculations(calculationData);
      await newCalculation.save();
      res.status(200).json({ massage: "Calculation Created Successfully" });
    }
  } catch (error) {
    return res.status(404).json({ error: "Failed to create calculation" });
  }

  // get all calculations
  //get: http://localhost:3000/api/calculation

  try {
    if (req.method === "GET") {
      const calculations = await Calculations.find({});

      if (!calculations)
        return res.status(404).json({ error: "No Data Found" });

      res.status(200).json(calculations);
    }
  } catch (error) {
    return res.status(404).json({ error: "Failed to get calculations" });
  }
}
