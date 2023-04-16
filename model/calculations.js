const { Schema, model, models } = require("mongoose");

const calculationsSchema = new Schema({
  propertyId: String,
  date: Date,
  dateString: String,
  propertyOwner: String,
  calculationType: String,
  category: String,
  amount: Number,
  description: String,
  expense: Boolean,
  street: String,
  city: String,
  state: String,
  zip: String,
});

const Calculations =
  models.calculations || model("calculations", calculationsSchema);
export default Calculations;
