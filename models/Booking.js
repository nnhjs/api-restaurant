import mongoose from "mongoose";

/* BookingSchema will correspond to a collection in your MongoDB database. */
const BookingSchema = new mongoose.Schema({
  id_account: { type: String },
  created: {
    type: String /*Thời gian tạo deal */,
  },
  id_hotel: { type: String },
  totalPrice: {
    type: Number,
  },
  status: { type: String },
});

export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);
