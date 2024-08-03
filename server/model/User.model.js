import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide unique Username"],
    unique: [true, "Username Already Exist"]
  },
  password: {
    type: String,
    required: [true, "Please provide a Password"],
    unique: false
  },
  email: {
    type: String,
    required: [true, "Please provide a Unique email"],
    unique: true
  },
  firstName: { type: String },
  lastName: { type: String },
  mobile: { type: Number },
  address: { type: String },
  profile: { type: String },
})

export default mongoose.model.Users || mongoose.model('User', UserSchema); // The meaning for this syntax is that, if we have User model already, Use it. If not create a new one. 