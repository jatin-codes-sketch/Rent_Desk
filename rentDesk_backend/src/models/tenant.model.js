import mongoose from "mongoose"

const tenantSchema=new mongoose.Schema({
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
      required: [true, "Owner ID is required"],
      index: true
    },

    name: {
      type: String,
      required: [true, "Tenant name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [50, "Name cannot exceed 50 characters"],
      index:true,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [
        /^[6-9]\d{9}$/,
        "Please enter a valid 10-digit phone number"
      ]
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      match: [
        /^\S+@\S+\.\S+$/,
        "Please enter a valid email address"
      ]
    },

    document: {
  type: {
    type: String,
    enum: ["aadhaar", "passport", "driving_license", "voter_id"],
    required: true
  },
  number: {
    type: String,   
    trim: true
  },
  fileUrl: {
    type: String,
    required: true
  }
},

    emergencyContact: {
      name: {
        type: String,
        trim: true,
      },
      phone: {
        type: String,
        trim: true,
      }
    },

    isActive: {
      type: Boolean,
      default: true
    }
},{timestamps:true})

export const Tenant=mongoose.model("Tenant",tenantSchema)