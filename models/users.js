import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  Name: String,
  Username: String,
  Email_id: String,
  password: String,
  Toa: [String],
  wishlist: [String],
  g_purchase: [String],
  generes_played: [String],
  createdAT: {
    type: Date,
    default: new Date(),
  },
});

const UserData = mongoose.model('UserData', userSchema);
export default UserData;
