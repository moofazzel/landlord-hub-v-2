import connectMongo from "@/database/conn";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error While Connecting to Database" })
  );
  try {
    // Delete a calculation
    //delete: http://localhost:3000/api/calculation/60f9b1b0b0b5a8a0b4e1b0a5
  } catch (error) {}
}
