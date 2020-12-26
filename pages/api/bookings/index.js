import Booking from "../../../models/Booking";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
  const {
    query: { id_account },
    method,
  } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const bookings = await Booking.find({
          id_account,
        }); /* find all the data in our database */
        res.status(200).json({ success: true, data: bookings });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const booking = await Booking.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: booking });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
