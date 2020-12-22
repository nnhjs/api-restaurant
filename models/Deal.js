import mongoose from "mongoose";

/* DealSchema will correspond to a collection in your MongoDB database. */
const DealSchema = new mongoose.Schema({
  list_food: {
    type: Object,
    /*
      {
        id_food: ...,
        amount: ...,
      }
    */
  },
  id_user: {
    type: String /* id_user */,
  },
  typeDeal: {
    type: String /* 3 trạng thái: pending, accept, refuse */,
  },
  created: {
    type: String /*Thời gian tạo deal */,
  },
  totalPrice: {
    type: Number,
  },
  id_account: { type: String },
  deal: { type: Object },
});

export default mongoose.models.Deal || mongoose.model("Deal", DealSchema);
