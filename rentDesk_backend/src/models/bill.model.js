import mongoose from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2"

const billSchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
      required: true,
    },

    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },

    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },

    month: {
      type: String, // YYYY-MM
      required: true,
    },

    baseRentSnapshot: {
      type: Number,
      required: true,
    },

    electricity: {
      type: Number,
      default: 0,
    },

    water: {
      type: Number,
      default: 0,
    },

    extraCharges: [
      {
        label: String,
        amount: Number,
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["unpaid", "paid"],
      default: "unpaid",
    },

    paidAmount: {
      type: Number,
      default: 0,
    },

    paidAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

billSchema.index({ roomId: 1, month: 1 }, { unique: true });

billSchema.plugin(aggregatePaginate);

export const Bill= mongoose.model("Bill", billSchema);
