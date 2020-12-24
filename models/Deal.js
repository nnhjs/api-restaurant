import mongoose from "mongoose";

/* DealSchema will correspond to a collection in your MongoDB database. */
const DealSchema = new mongoose.Schema({
  id_account: { type: String },
  created: {
    type: String /*Thời gian tạo deal */,
  },
  deal: { type: Object },
  totalPrice: {
    type: Number,
  },
  status: { type: String },
});

export default mongoose.models.Deal || mongoose.model("Deal", DealSchema);
