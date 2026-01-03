import mongoose from "mongoose"

const roomSchema = new mongoose.Schema({
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
      required: [true, "Owner ID is required"],
      index: true
    },

    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
      required: [true, "Property ID is required"],
      index: true
    },

    roomNumber: {
      type: String,
      required: [true, "Room number is required"],
      trim: true,
      minlength: [1, "Room number cannot be empty"],
      maxlength: [20, "Room number is too long"]
    },

    floor: {
      type: Number,
      min: [0, "Floor cannot be negative"]
    },

    baseRent: {
      type: Number,
      required: [true, "Base rent is required"],
      min: [0, "Base rent cannot be negative"]
    },

    maxTenants: {
      type: Number,
      required: [true, "Max tenants is required"],
      min: [1, "At least 1 tenant is required"],
      max: [10, "Max tenants limit exceeded"]
    },

    isActive: {
      type: Boolean,
      default: true
    }
},{timestamps:true})

export const Room=mongoose.model("Room",roomSchema)