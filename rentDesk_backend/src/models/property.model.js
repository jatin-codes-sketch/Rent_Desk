import mongoose from "mongoose"

const propertySchema=new mongoose.Schema({
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner", 
      required: [true, "Owner ID is required"],
      index: true
    },

    name: {
      type: String,
      required: [true, "Property name is required"],
      trim: true,
      minlength: [3, "Property name must be at least 3 characters"],
      maxlength: [100, "Property name cannot exceed 100 characters"]
    },

    address: {
      street: {
        type: String,
        trim: true
      },
      area: {
        type: String,
        trim: true
      },
      city: {
        type: String,
        trim: true,
        required: [true, "City is required"]
      },
      state: {
        type: String,
        trim: true,
        required: [true, "State is required"]
      }
    },

    isActive: {
      type: Boolean,
      default: true
    }
},{timestamps:true})

export const Property=mongoose.model("Property",propertySchema)