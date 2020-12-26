import Booking from "../../../models/Booking";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const booking = await Booking.findById(id);
        if (!booking) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: booking });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const booking = await Booking.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!booking) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: booking });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedBooking = await Booking.deleteOne({ _id: id });
        if (!deletedBooking) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
