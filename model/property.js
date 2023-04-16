const { Schema, model, models } = require("mongoose");

const userSchema = new Schema({
  email: String,
  street: String,
  city: String,
  state: String,
  zip: String,
});

const Property = models.property || model("property", userSchema);
export default Property;
