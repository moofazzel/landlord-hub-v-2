const { Schema, model, models } = require("mongoose");

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  avatar: String,
  createdAt: String,
});

const User = models.user || model("user", userSchema);
export default User;
