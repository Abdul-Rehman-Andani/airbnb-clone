import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
  image : {type : String},
  emailVerified: { type: Date },
}, {timestamps: true});

export const User = models?.User || model("User", userSchema);
