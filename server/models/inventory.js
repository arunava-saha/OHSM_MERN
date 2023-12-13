import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
  {
    sname: {
      type: String,
      required: true,
    },
    stype: {
      type: String,
      required: true,
    },
    stypeOther: {
      type: String,
    },
    capacity: {
      type: Number,
      required: true,
    },
    amenities: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enums: ["Active", "Inactive"],
      default: "Active",
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Inventory", inventorySchema);
