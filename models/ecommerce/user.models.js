import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercse: true
  },
  email : {
    type: String,
    required: true,
    unique: true,
    lowercse: true
  },
  password:{
    type: String,
    required: true
  }
},{timestamps:true})

export const User = mongoose.mode("User", userSchema)
