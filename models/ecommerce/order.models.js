import mongoose from "mongoose"

const orderItemSchema= new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },
  quantity:{
    type: Number,
    requird: true 
  }
})

const orderSchema = new mongoose.Schema({
  orderPrice:{
    type:Number,
    required: true
  },
  customer: {
    type: mongoose.schema.types.objectId,
    ref:"User"
  },
  orderItems: {
    type: [orderItemSchema]
  },
  address: {
    type: String,
    enum: ["PENDING", "CANCELLED", "DELIVERED"],
    default: "PENDING"
  }
}, {timestamps:true})

export const Order = mongoose.model("order" ,orderSchema)