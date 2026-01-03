import mongoose from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2"

const roomAssignmentSchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
      required: true,
    },

    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },

    tenantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tenant",
      required: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      default: null,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

roomAssignmentSchema.plugin(aggregatePaginate)

export const RoomAssignment= mongoose.model("RoomAssignment", roomAssignmentSchema);
