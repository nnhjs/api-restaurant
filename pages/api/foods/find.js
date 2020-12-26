import Food from "../../../models/Food";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
  const {
    query: { keyword },
    method,
  } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const foods = await Food.find({
          $or: [{ name: new RegExp(keyword) }],
        }); /* find all the data in our database */
        res.status(200).json({ success: true, data: foods });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const food = await Food.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: food });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
