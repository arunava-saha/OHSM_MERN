import mongoose from "mongoose";
const PropertySchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    logo: {
      type: String,
      default: "/images/Linear.jpg",
    },
    ptype: {
      type: String,
      enums: ["default", "personal", "shopping", "wishlist", "work"],
      default: "default",
    },
    pName: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    Inventory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Inventory",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Property", PropertySchema);
